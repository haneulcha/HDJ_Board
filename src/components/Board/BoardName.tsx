import React, { ReactElement, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Field, Form } from "formik";
import { IIsOnState, IrootState } from "../../store/_type";
import { reqUpdateBoard } from "../../store/_action/board";

export default function BoardName(): ReactElement {
    const dispatch = useDispatch();
    const isOn: IIsOnState = useSelector((state: IrootState) => state.isOn);
    const [editable, setEditable] = useState(false);

    function dispatchUpdate(values: { name: string }): void {
        dispatch(
            reqUpdateBoard({
                name: values.name,
                timestamp: isOn.boardId,
            })
        );
    }

    return (
        <Formik
            initialValues={{
                name: isOn.board,
            }}
            onSubmit={(values, actions) => {
                if (values.name) {
                    dispatchUpdate(values);
                }
                setEditable(false);
                actions.setSubmitting(false);
            }}
            enableReinitialize
        >
            {({ handleChange, values }) => (
                <Form>
                    {editable ? (
                        <Field
                            id="board-name"
                            name="name"
                            placeholder={isOn.board}
                            values={isOn.board}
                            onChange={handleChange}
                            autoFocus
                            onBlur={() => {
                                if (values.name) {
                                    dispatchUpdate(values);
                                }
                                setEditable(false);
                            }}
                        />
                    ) : (
                        <>
                            <h1
                                className="title"
                                onClick={() => setEditable(true)}
                            >
                                {isOn.board}
                            </h1>
                        </>
                    )}
                </Form>
            )}
        </Formik>
    );
}

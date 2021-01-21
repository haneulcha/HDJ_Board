import React, { ReactElement, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Field, Form } from "formik";
import { IIsOnState, IrootState } from "../../store/_type";
import { reqUpdateBoard } from "../../store/_action/board";

export default function BoardName(): ReactElement {
    const dispatch = useDispatch();
    const isOn: IIsOnState = useSelector((state: IrootState) => state.isOn);
    const [editable, setEditable] = useState(false);

    function valInput(value: string): string | undefined {
        let error;
        if (!value) {
            error = "Required";
        }
        return error;
    }
    return (
        <Formik
            initialValues={{
                name: isOn.board,
            }}
            onSubmit={(values, actions) => {
                console.log(values);
                actions.setSubmitting(false);
            }}
            enableReinitialize
        >
            {({ handleChange, values, validateField, errors }) => (
                <Form>
                    {editable ? (
                        <Field
                            id="board-name"
                            name="name"
                            placeholder={isOn.board}
                            values={isOn.board}
                            validate={valInput}
                            onChange={handleChange}
                            onBlur={() => {
                                validateField("name");
                                // dispatch(
                                //     reqUpdateBoard({
                                //         name: values.name,
                                //         timestamp: isOn.boardId,
                                //     })
                                // );
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
                            {errors.name && <span>{errors.name}</span>}
                        </>
                    )}
                </Form>
            )}
        </Formik>
    );
}

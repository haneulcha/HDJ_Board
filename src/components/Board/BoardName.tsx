import React, { ReactElement, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Field, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { IIsOnState, IrootState } from "../../store/_type";
import { reqUpdateBoard } from "../../store/_action/board";

export default function BoardName(): ReactElement {
    const dispatch = useDispatch();
    const isOn: IIsOnState = useSelector((state: IrootState) => state.isOn);
    const [editable, setEditable] = useState(false);

    const useStyles = makeStyles({
        boardName: {
            display: "inline-block",
            color: "#1F284D",
            fontSize: "3.3rem",
            fontWeight: "bold",
            width: "auto",
            margin: ".6rem 1rem",
            padding: "0",
            cursor: "auto",
            backgroundColor: "transparent",
            "&:focus": {
                border: "none",
                outline: "1px dashed gray",
            },
        },
    });

    function dispatchUpdate(values: { name: string }): void {
        dispatch(
            reqUpdateBoard({
                name: values.name,
                timestamp: isOn.boardId,
            })
        );
    }

    const classes = useStyles();
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
                            className={classes.boardName}
                            onBlur={() => {
                                if (values.name) {
                                    dispatchUpdate(values);
                                }
                                setEditable(false);
                            }}
                        />
                    ) : (
                        <>
                            <Typography
                                variant="h3"
                                component="h1"
                                className={classes.boardName}
                                onClick={() => setEditable(true)}
                            >
                                {isOn.board}
                            </Typography>
                        </>
                    )}
                </Form>
            )}
        </Formik>
    );
}

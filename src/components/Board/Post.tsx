import React, { ReactElement, useState } from "react";
import { Formik, Field, Form } from "formik";
import { IPost } from "../../store/_type";

interface PostProps {
    post: IPost;
}
export default function Post({ post }: PostProps): ReactElement {
    const [editable, setEditable] = useState(false);

    return (
        <div className="post">
            <div onClick={() => setEditable(true)}>
                <span>{post.title}</span>
                <span>{post.content}</span>
            </div>
            {editable && (
                <Formik
                    initialValues={{
                        title: "",
                        content: "",
                    }}
                    onSubmit={(values, actions) => {
                        console.log(values);
                        console.log("submit !");
                        actions.setSubmitting(false);
                    }}
                >
                    {() => (
                        <Form>
                            {/* <label htmlFor='content'>Content</label> */}
                            <Field
                                id="title"
                                name="title"
                                placeholder="제목을 입력하세요"
                                onBlur={() => console.log("blur !")}
                            />
                            <Field
                                id="content"
                                name="content"
                                placeholder="메모를 작성하세요"
                                as="textarea"
                                rows={10}
                                onBlur={() => console.log("blur !")}
                            />
                        </Form>
                    )}
                </Formik>
            )}
        </div>
    );
}

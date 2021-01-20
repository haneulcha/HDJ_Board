import React, { ReactElement, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form } from "formik";
import { IPost } from "../../store/_type";
import { reqUpdatePost } from "../../store/_action/post";

interface PostProps {
    post: IPost;
}
export default function Post({ post }: PostProps): ReactElement {
    const dispatch = useDispatch();
    const [editable, setEditable] = useState({ title: false, content: false });
    const postRef = useRef<HTMLDivElement>(null); // TODO: 필요없을지도

    // function onClickOutSide():void {

    //     if (postRef.current) {
    //         setEditable({ title: false, content: false }); // Disable text input
    //     }
    // }

    const postStyle = {
        left: post.position.x,
        top: post.position.y,
        width: post.size.width,
        height: post.size.height,
    };

    // useEffect(() => {
    //     if (editable.title || editable.content) {
    //         document.addEventListener("mousedown", onClickOutSide);
    //     }
    //     return () => {
    //         document.removeEventListener("mousedown", onClickOutSide);
    //     };
    // });

    return (
        <div ref={postRef} className="post" style={postStyle}>
            <Formik
                initialValues={{
                    title: post.title,
                    content: post.content,
                }}
                onSubmit={(values, actions) => {
                    actions.setSubmitting(false);
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    errors,
                    touched,
                }) => (
                    <Form>
                        {editable.title ? (
                            <Field
                                id="title"
                                name="title"
                                placeholder="제목을 입력하세요"
                                values={values.title}
                                onChange={handleChange}
                                onBlur={() => {
                                    dispatch(
                                        reqUpdatePost({ ...post, ...values })
                                    );
                                    setEditable({ ...editable, title: false });
                                }}
                            />
                        ) : (
                            <span
                                className="title"
                                onClick={() =>
                                    setEditable({ ...editable, title: true })
                                }
                            >
                                {post.title}
                            </span>
                        )}
                        {editable.content ? (
                            <Field
                                id="content"
                                name="content"
                                placeholder="메모를 작성하세요"
                                as="textarea"
                                rows={10}
                                values={values.content}
                                onChange={handleChange}
                                onBlur={() => {
                                    dispatch(
                                        reqUpdatePost({ ...post, ...values })
                                    );
                                    setEditable({
                                        ...editable,
                                        content: false,
                                    });
                                }}
                            />
                        ) : (
                            <span
                                className="content"
                                onClick={() =>
                                    setEditable({ ...editable, content: true })
                                }
                            >
                                {post.content}
                            </span>
                        )}
                    </Form>
                )}
            </Formik>
        </div>
    );
}

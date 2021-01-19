import React, { ReactElement } from 'react'
import { Formik, Field, Form } from 'formik';


export default function Post(): ReactElement {
    return(
        <div className="post">            
            <Formik
                initialValues={{
                    title: "",
                    content: ""
                }}
                onSubmit={(values, actions) => {
                    console.log(values)
                    console.log('submit !')
                    actions.setSubmitting(false)
                }}               
            >
            {() => (
                <Form>
                    {/* <label htmlFor='content'>Content</label> */}
                    <Field 
                        id='title' 
                        name='title' 
                        placeholder="제목을 입력하세요"                        
                        onBlur={() => console.log('blur !')}
                    />
                    <Field 
                        id='content' 
                        name='content' 
                        placeholder="메모를 작성하세요" 
                        as="textarea" 
                        rows={10}
                        onBlur={() => console.log('blur !')}
                    />
                </Form>
            )}
            </Formik>  
        </div>
    )
}
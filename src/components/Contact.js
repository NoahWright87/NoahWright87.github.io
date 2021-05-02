import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage,  } from 'formik';

export class Contact extends Component {
    static displayName = Contact.name;

    render() {
        return (
            <div>
                <h1>Contact Noah</h1>
                <p><strong>NOTE:</strong> This is a non-functioning placeholder that will later be used to send me a message.</p>

                <Formik
                    initialValues={{ email: '', name: '', message: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = 'Required';
                        }

                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }

                        if (!values.message) {
                            errors.message = 'Required';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            //alert(JSON.stringify(values, null, 2));
                            alert("//TODO: Send Noah an email, text, tweet, DM, wuphf, etc");
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div>
                                <label htmlFor="name">Name</label>
                                <Field type="text" name="name" />
                                <ErrorMessage name="name" component="div" />
                            </div>
                            <div>
                                <label htmlFor="email">Email Address</label>
                                <Field type="email" name="email" />
                                <ErrorMessage name="email" component="div" />
                            </div>
                            <div>
                                <label htmlFor="message">Message to Send</label><br />
                                <Field type="text" as="textarea" name="message" />
                                <ErrorMessage name="message" component="div" />
                            </div>
                            <div>
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }
}

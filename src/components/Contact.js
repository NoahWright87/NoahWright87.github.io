import React, { Component } from 'react';
import BaseComponent from './BaseComponent'
import { Formik, Form, Field, ErrorMessage, } from 'formik';
import axios from 'axios';
//import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

//TODO: Switching back to Formik made this ugly again - need to make it prettier

export class Contact extends BaseComponent {
    static displayName = Contact.name;

    render() {
        return (
            <div>
                <h1>Contact Noah</h1>

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
                            this.handleSubmit(values);
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
                {/*TODO: Have a success message appear here*/}
            </div>
        );
    }

    handleSubmit(args) {
        var request = {
            name: args.name,
            email: args.email,
            message: args.message
        };

        var url = 'https://noahwrightwebservices.azurewebsites.net/ContactMe/Send';
        axios.post(url, request,
        )
            .then(response => {
                alert("Thanks for reaching out!  I'll be in touch!");
            })
            .catch(err => {
                alert("Error occurred while sending the message - please try again later!");
            })
            .finally(() => {
                //Clean-up would go here
            });
    }
}

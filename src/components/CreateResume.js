import React, { Component } from 'react';
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';

export class CreateResume extends Component {
    static displayName = CreateResume.name;

    //constructor(props) {
    //    super(props);
    //    this.state = { value: '' };

        
    //}

    //handleChange(event) {
    //    this.setState({ value: event.target.value });
    //}

    //handleSubmit(event) {
    //    alert('Submit has happened!');
    //    event.preventDefault();
    //}




    render() {
        return (
            <div>
                <h1>Create Resume</h1>
                <p>TODO: Use this page to create the JSON that will be used on the Resume page</p>
                <hr />

                {/*<form onSubmit={this.handleSubmit}>*/}
                {/*    <label>Name:*/}
                {/*        <input type="text" value={this.state.value} onChange={this.handleChange} />*/}
                {/*    </label>*/}

                {/*</form>*/}
                <SignupForm />

            </div>
        );
    }
}

const SignupForm = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />

            <button type="submit">Submit</button>
        </form>
    );
};
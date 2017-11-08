import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class SimpleReduxForm extends Component {

    render() {
        return (
            <div>
                <h1>New post</h1>
                <form>
                    <label>First name</label>
                    <Field name="firstName" component="input" />
                </form>
            </div>
        );
    }
}

// Decorate form with reduxForm
SimpleReduxForm = reduxForm({
    form: 'simpleReduxForm'
})(SimpleReduxForm);

export default SimpleReduxForm;
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import ShowResults from '../../../../helpers/show_results';

/*
*  https://www.youtube.com/watch?v=eDTi7lYR1VU&feature=youtu.be
*   I HAVE NOT COMPLETED THIS!
*   33 mins into video
*/


class SimpleReduxForm extends Component {

    // submit() {
    //     //this
    // }

    render() {

        const { handleSubmit } = this.props;

        return (
            <div>
                <h1>New post</h1>
                <form onSubmit={handleSubmit(ShowResults)}>
                <div className="form-group row">
                        <label className="col-2 col-form-label">First name</label>
                        <Field className="form-control" name="firstName" component="input" placeholder="First Name" />
                    </div>
                    <div className="form-group row">
                        <label className="col-2 col-form-label">Last name</label>
                        <Field className="form-control" name="lastName" component="input" placeholder="Last Name" />
                    </div>
                    <div className="form-group row">
                        <label className="col-2 col-form-label">Email</label>
                        <Field className="form-control" name="email" component="input" placeholder="Email" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

// Decorate form with reduxForm
SimpleReduxForm = reduxForm({
    form: 'simpleReduxForm',
    destroyOnUnmount: false
})(SimpleReduxForm);

export default SimpleReduxForm;
import React, { Component } from 'react';
import { Form, Field, reduxForm, FieldArray } from 'redux-form';
//import SimpleReduxForm from './simple_redux_form/simple_redux_form';
import submitPostNewSubmitForm from './posts_new_submit';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)

const PostsNew = props => {
    const { error, handleSubmit, pristine, reset, submitting } = props
    return (
        <Form onSubmit={handleSubmit(submitPostNewSubmitForm)}>
            <Field
                name="postTitle"
                type="text"
                component={renderField}
                label="Posts Title:"
            />
            <Field
                name="postCategories"
                type="text"
                component={renderField}
                label="Posts Categories"
            />
            <Field
                name="postContent"
                type="text"
                component={renderField}
                label="Post Content"
            />
            {/* <Field
          name="password"
          type="password"
          component={renderField}
          label="Password"
        /> */}
            {error && <strong>{error}</strong>}
            <div>
                <button type="submit" disabled={submitting}>
                    Log In
          </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
          </button>
            </div>
        </Form>
    )
}


function validate(values) {
    const errors = {};
    console.log('Values: ' + values);
    if (!values.postTitle) {
        errors.postTitle = 'Title is required';
    } else if (values.postTitle.length > 20) {
        errors.postTitle = 'Title max is 20 chars';
    }

    if (!values.postCategories) {
        errors.postCategories = 'Please enter a category';
    } else if (values.postCategories.split(',').length > 3) {
        errors.postCategories = 'Max categories is 3';
    }

    if (!values.postContent) {
        errors.postContent = 'Post content is required';
    } else if (values.postContent.length > 50) {
        errors.postContent = 'Post content max is 50 chars';
    }

    return errors;
}

export default reduxForm({
    form: 'PostsNewForm',
    validate
})(PostsNew);



// class PostsNew extends Component {

//     renderInput(field) {
//         return (
//             <div>
//                 <label className='col-2 col-form-label'>{field.postLabel}</label>
//                 <div>
//                     {/*ES6 destructure onFocus, onChange, etc...*/}
//                     <input
//                         {...field}
//                         type='text'
//                         className="form-control" />
//                     {field.meta.error && <span>{field.meta.error}</span>}
//                 </div>
//             </div>
//         );
//     }

//     // renderFieldArray({ fields }) {
//     //     return (
//     //         <ul>
//     //             <li>
//     //                 <button type='button' onClick={() => { fields.push() }}>
//     //                     Add Category
//     //                 </button>
//     //                 {fields !== undefined && fields.length > 0 && fields.map((field, index) => {
//     //                     <li key={index}>
//     //                         <Field name={field} component={renderInput} placeholder={`Phone #${index + 1}`} />
//     //                         <button type='button' onClick={() => { fields.remove(index) }}>
//     //                             Remove
//     //                     </button>
//     //                     </li>
//     //                 })
//     //                 }
//     //             </li>
//     //         </ul>
//     //     );
//     // }

//     onSubmit(values) {
//         console.log('Submit:' + values);
//     }

//     render() {
//         // Passed compliments of reduxForm
//         const { handleSubmit } = this.props;

//         return (
//             <div>
//                 {/* <SimpleReduxForm /> */}
//                 <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
//                     <div className="form-group row">
//                         <label>Post title</label>
//                         <Field name="postTitle"
//                             postLabel="Title:"
//                             placeholder="Title"
//                             component={this.renderInput} />
//                         <Field name="postCategories"
//                             postLabel="Categories list:"
//                             placeholder="Categories"
//                             component={this.renderInput} />
//                         <Field name="postContent"
//                             postLabel="Content:"
//                             placeholder="Content"
//                             component={this.renderInput} />
//                     </div>
//                     <div className="form-group row">
//                         <button type="submit" className="btn btn-primary">Submit</button>
//                     </div>
//                 </form>
//             </div>
//         );
//     }

// }

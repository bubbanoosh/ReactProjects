import React, { Component } from 'react';
import { Form, Field, reduxForm, FieldArray, SubmissionError } from 'redux-form';
import { Link } from 'react-router-dom';

//import SimpleReduxForm from './simple_redux_form/simple_redux_form';

import RenderField from '../../forms/render_field';
import RenderFieldArray from '../../forms/render_field_array';

//import submitPostNewSubmitForm from './submit_post_new_form';
import normalizeUpperText from '../../helpers/normalizeUpperText';



//ACTION CREATOR
import { connect } from 'react-redux';
import { createPost } from '../../../actions';

class PostsNew extends Component {

    submitPostNewSubmitForm(values) {
        // simulate server latency
        const garbageAndSwears = ['asdf', 'xxx', 'fuck', 'shit'];
        if (garbageAndSwears.includes(values.postTitle)) {
            throw new SubmissionError({
                postTitle: 'Please don\'t use the swears or talk garbage',
                _error: 'Invalid title!'
            })
        } else if (garbageAndSwears.includes(values.postContent)) {
            throw new SubmissionError({
                postContent: 'That is bad content',
                _error: 'Invalid Content!'
            })
        }

        // CreatePost(values, callback)
         return this.props.createPost(values, () => {
             this.props.history.push('/')
         });
    }

    render() {

        const { error, handleSubmit, pristine, reset, invalid, submitting } = this.props
        return (
            <Form onSubmit={handleSubmit(this.submitPostNewSubmitForm.bind(this))}>
                <Field
                    name="postTitle"
                    type="text"
                    component={RenderField}
                    label="Posts Title:"
                    normalize={normalizeUpperText}
                />
                <FieldArray
                    name="postCategories"
                    component={RenderFieldArray}
                    label="Posts Categories"
                />
                <Field
                    name="postContent"
                    type="text"
                    component={RenderField}
                    label="Post Content"
                />
                {error && <strong>{error}</strong>}
                <div>
                    <button type="submit" disabled={invalid || pristine || submitting} className={invalid || pristine ? 'btn btn-secondary' : 'btn btn-primary'}>
                        Submit
                </button>
                    <button type="button" disabled={pristine} onClick={reset} className='btn btn-secondary' style={{ marginLeft: '10px' }}>
                        Clear Values
                </button>
                    <Link to="/" className="btn btn-danger" style={{ marginLeft: '10px' }}>Cancel</Link>
                </div>
            </Form>
        )
    }
}

export default reduxForm({
    form: 'PostsNewForm',
    validate
})(
    // Connect ACTION CREATOR
    connect(null, { createPost })(PostsNew)
    );


function validate(values) {
    const errors = {};

    if (!values.postTitle) {
        errors.postTitle = 'Title is required';
    } else if (values.postTitle.length > 20) {
        errors.postTitle = 'Title max is 20 chars';
    }

    if (!values.postCategories) {
        errors.postCategories = 'Please enter a category';
    } else if (values.postCategories.length > 3) {
        errors.postCategories = [];
        errors.postCategories._error = 'Max categories is 3';
    }

    if (!values.postContent) {
        errors.postContent = 'Post content is required';
    } else if (values.postContent.length > 50) {
        errors.postContent = 'Post content max is 50 chars';
    }

    return errors;
}




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

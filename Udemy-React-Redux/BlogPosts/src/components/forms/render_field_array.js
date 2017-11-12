import React from 'react';
import { Field } from 'redux-form';

import RenderField from './render_field'

import normalizeUpperText from '../helpers/normalizeUpperText';

const RenderFieldArray = ({ fields }) => (
    <ul className='list-group'>
        <li className='list-group-item'>
            <button type='button' onClick={() => { fields.push() }}>
                Add Category
            </button>
        </li>
        {fields.map((field, index) =>
            <li key={index} className='list-group-item'>
                <Field 
                    name={field} 
                    component={RenderField}
                    placeholder={`Category: ${index + 1}`}
                    normalize={normalizeUpperText}
                     />
                <button type='button' onClick={() => { fields.remove(index) }}>
                    Remove
                    </button>
            </li>
        )}
        {fields.error && <li className='error'>{fields.error}</li>}
    </ul>
)

export default RenderFieldArray;

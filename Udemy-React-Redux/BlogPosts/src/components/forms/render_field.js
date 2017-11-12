import React from 'react';

const RenderField = ({ input, label, type, meta: { touched, error } }) => {
    
    const styleDiv = `form-group ${touched && error? 'has-danger' : ''}`;

    return (   
    <div className={styleDiv}>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} className='form-control' />
            {touched && error && <span className='text-help'>{error}</span>}
        </div>
    </div>
    )};

export default RenderField;
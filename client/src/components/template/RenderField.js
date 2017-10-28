import React from 'react';

export default ({ input,label,type,meta: { error, touched, pristine } }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} type={type} style={{ marginBottom: '5px'}} className="form-control form--label" placeholder={label}/>
            <div className="text-danger" style={{ marginBottom: '20px' }}>
                {touched && error}
            </div>
        </div>
    )
}
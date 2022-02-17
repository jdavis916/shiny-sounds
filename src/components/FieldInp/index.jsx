import React from 'react'

function FieldInp(props) {
  return (
    <>
      <label htmlFor={props.id} className="FormRowLabel">
        {props.label}
      </label>
      <input
        className="FormRowInput"
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
        autoComplete={props.autoComplete}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
  
}

export default FieldInp;
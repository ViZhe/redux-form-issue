
import React from 'react'
import {Field} from 'redux-form'

const renderFieldDefault = ({title, meta: {touched, error}, input, ...rest}) => (
  <label>
    {title}
    <input {...rest} {...input} />
    {touched && error && <span>{error}</span>}
    <br />
  </label>
)

const SuperForm = ({fields, handleSubmit, handleSelectTemplate}) => (
  <div>
    <h2>Super Form</h2>

    <p>Select template:</p>
    <select onChange={handleSelectTemplate}>
      <option value='first'>first</option>
      <option value='second'>second</option>
    </select>

    <p>Create item:</p>
    <form onSubmit={handleSubmit} >
      {fields.map(({type, name, title, placeholder}, fieldIndex) => (
        <Field
          key={fieldIndex}
          component={renderFieldDefault}
          type='text'
          name={name}
          title={title}
          placeholder={placeholder}
        />
      ))}
      <button>Send</button>
    </form>
  </div>
)


export default SuperForm

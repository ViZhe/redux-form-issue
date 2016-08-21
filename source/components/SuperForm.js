
import React from 'react'
import {Field} from 'redux-form'

const renderFieldDefault = ({meta: {touched, error}, input, ...rest}) => (
  <label>
    {input.name}
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
      <option value='a'>A</option>
      <option value='b'>B</option>
      <option value='c'>C</option>
    </select>

    <p>Create item:</p>
    <form onSubmit={handleSubmit} >
      {fields.map(({type, name, title}, fieldIndex) => (
        <Field
          key={fieldIndex}
          component={renderFieldDefault}
          type='text'
          name={name}
        />
      ))}
      <button>Send</button>
    </form>
  </div>
)


export default SuperForm

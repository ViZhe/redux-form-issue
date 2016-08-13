
import {cloneElement} from 'react'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'


const Former = ({children, onSubmit, handleSubmit}) => (
  cloneElement(children, {
    handleSubmit: handleSubmit(onSubmit)
  })
)


export default connect()(reduxForm({
  form: 'SuperForm',
  enableReinitialize: true
})(Former))

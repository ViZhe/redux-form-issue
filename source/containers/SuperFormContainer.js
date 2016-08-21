
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reset} from 'redux-form'

import Former from './Former'
import SuperForm from '../components/SuperForm'


class SuperFormContainer extends Component {
  componentWillMount() {
    this.setState({currentTemplate: 'a'})
  }
  selectTemplate = event => {
    this.setState({currentTemplate: event.target.value})
  }
  handleSumbitForm = data => {
    if (!Object.keys(data).length) {
      console.info('handleSumbitForm: No change')
      return
    }
    console.log('%% handleSumbitForm %%')
    console.log(data)
    console.log('%% handleSumbitForm %%')
    this.props.resetForm()
  }
  render() {
    let fields
    let initialValues
    let validate

    if (this.state.currentTemplate === 'a') {
      fields = [
        {name: 'f1'},
        {name: 'f2'}
      ]
      initialValues = {
        f2: '10'
      }
      validate = values => {
        const errors = {}
        return errors
      }
    } else if (this.state.currentTemplate === 'b') {
      fields = [
        {name: 'f1'},
        {name: 'f2'},
        {name: 'f3'},
        {name: 'f4'},
        {name: 'f5'}
      ]
      initialValues = {
        f2: '10'
      }
      validate = values => {
        const errors = {}
        if (!values.f3) {
          errors.f3 = 'Required'
        }
        return errors
      }
    } else if (this.state.currentTemplate === 'c') {
      fields = [
        {name: 'f3'},
        {name: 'f5'},
        {name: 'f6'}
      ]
      initialValues = {
        f6: 1
      }
      validate = values => {
        const errors = {}
        if (!values.f3) {
          errors.f3 = 'Required'
        }
        if (values.f6 < 10) {
          errors.f6 = 'Must be >= 10'
        }
        return errors
      }

    }

    return (
      <div>
        <Former
          initialValues={initialValues}
          validate={validate}
          onSubmit={this.handleSumbitForm}
        >
          <SuperForm
            handleSelectTemplate={this.selectTemplate}
            fields={fields}
          />
        </Former>
        <p><b>Validate Map:</b></p>
        <p>f3 is Required</p>
        <p>f6 must be >= 10</p>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  resetForm: () => dispatch(reset('SuperForm'))
})

export default connect(
  null,
  mapDispatchToProps
)(SuperFormContainer)

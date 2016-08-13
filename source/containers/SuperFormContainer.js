
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reset} from 'redux-form'

import Former from './Former'
import SuperForm from '../components/SuperForm'


class SuperFormContainer extends Component {
  componentWillMount() {
    this.setState({currentTemplate: 'first'})
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
  }
  render() {
    let fields
    let initialValues
    let validate

    if (this.state.currentTemplate === 'first') {
      fields = [
        {
          name: 'id',
          title: 'ID field',
          placeholder: 'type id'
        },
        {
          name: 'count',
          title: 'Count field',
          placeholder: 'type count'
        },
        {
          name: 'position',
          title: 'Position field',
          placeholder: 'type position'
        }
      ]
      initialValues = {
        count: '10',
        position: 'left'
      }
      validate = values => {
        const errors = {}
        if (!values.id) {
          errors.id = 'ID is Required'
        }
        if (values.count !== '1') {
          errors.count = 'must be 1'
        }
        return errors
      }
    } else {
      fields = [
        {
          name: 'id',
          title: 'ID field',
          placeholder: 'type id'
        },
        {
          name: 'count',
          title: 'Count field',
          placeholder: 'type count'
        },
        {
          name: 'size',
          title: 'Size field',
          placeholder: 'type size'
        }
      ]
      initialValues = {
        count: '5',
        size: 'big'
      }
      validate = values => {
        const errors = {}
        if (values.size !== 'small') {
          errors.size = 'Size must be small'
        }
        if (values.count !== '5') {
          errors.count = 'must be 5'
        }
        return errors
      }

    }

    return (
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

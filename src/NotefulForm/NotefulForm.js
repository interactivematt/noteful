import React from 'react'
import '../index.css'
import PropTypes from 'prop-types'

export default function NotefulForm(props) {
  const { className, ...otherProps } = props
  console.log(props)
  return (
    <form
      className={['Noteful-form', className].join(' ')}
      action='#'
      {...otherProps}
    >
      
    </form>
  )
}

NotefulForm.propTypes = {
  children: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
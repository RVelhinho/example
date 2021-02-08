import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './random-component.module.scss'

function RandomComponent({ text1, text2 }) {
  return (
    <div className={`container-fluid ${styles.containerFluid}`}>
      <div className='row w-100'>
        <div className='col-3 px-0'>
          <span className={styles.yoo}> {text1}</span>
        </div>
        <div className='col px-0'>
          <span className={styles.yoo}> {text2}</span>
        </div>
      </div>
    </div>
  )
}

RandomComponent.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired
}

export default RandomComponent

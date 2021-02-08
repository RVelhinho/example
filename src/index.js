import React from 'react'
import styles from './styles.scss'

export {default as RandomComponent} from './random-component.jsx';

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

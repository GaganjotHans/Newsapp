import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center container'>
        <img src={loading} alt="Loading Spinner" />
      </div>
    )
  }
}

export default Spinner
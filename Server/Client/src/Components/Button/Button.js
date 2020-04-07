import React from 'react'
import './Button.scss'

export default function Button(props) {
  const {
    type,
    url
  } = props.buttonData
  const {
    onPressed
  } = props

  if (type === 'website') {
    return (
      <button className='button button__website'>
        {props.children}
      </button>
    )
  } else if (type === 'app') {
    return (
      <button className='button button__app'>
        {props.children}
        <img className='button__arrow' alt='arrow' src={process.env.PUBLIC_URL + '/arrow.png'} />
      </button>
    )
  } else if (type === 'hero') {
    return (
      <button className='button button__website'>
        {props.children}
      </button>
    )
  } else if (type === 'submit') {
    return (
      <button className='button button__website' onClick={() => { 
        if(onPressed){onPressed()}} }>
        {props.children}
      </button>
    )
  }
}
import React from 'react'
import './Button.scss'
import Loader from '../Loader/Loader'

export default function Button(props) {
  const {
    type,
    url
  } = props.buttonData
  const {
    onPressed,
    loading,
    fullpageApi
  } = props

  if (type === 'website') {
    return (
      <a href={url} target='_blank'>
        <button className='button button__website'>
          {props.children}
        </button>
      </a>

    )
  } else if (type === 'app') {
    return (
      <a href={url} target='_blank'>
        <button className='button button__app'>
          {props.children}
          <img className='button__arrow' alt='arrow' src={process.env.PUBLIC_URL + '/arrow.png'} />
        </button>
      </a>
    )
  } else if (type === 'hero') {
    return (
      <button className='button button__website' onClick={fullpageApi.moveTo('contact-anchor')}>
        {props.children}
      </button>
    )
  } else if (type === 'submit') {
    return (
      <button className='button button__website' onClick={() => {
        if (onPressed) { onPressed() }
      }}>
        {loading ? <Loader /> : (
          props.children
        )}
      </button>
    )
  }
}
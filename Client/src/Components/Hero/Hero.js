import React, { useEffect, useState } from 'react'
import './Hero.scss'
import Button from '../Button/Button'
import FadeIn from '../FadeIn/FadeIn'

export default function Hero(props) {
  const {
    data,
    currentIndex,
    myIndex
  } = props

  const [mouseHeight, setMouseHeight] = useState(0)
  const [mouseWidth, setMouseWidth] = useState(0)

  useEffect(() => {
    window.addEventListener('mousemove', (e) => { setMouseHeight(e.clientY); setMouseWidth(e.clientX) })

  }, [])

  const play = currentIndex === myIndex

  return (
    <div className="hero">
      <div className='hero__test'></div>
      <div className="hero__firstContainer">
        <FadeIn play={play}>
          <h1 className="hero__name">{data.name}</h1>
        </FadeIn>
        <FadeIn play={play} delay={0.05}>
          <p className="hero__desc">{data.description}</p>
        </FadeIn>
        <FadeIn play={play} delay={0.1}>
          <div className='hero__buttonContainer' >
            <Button buttonData={data.button} >{data.button.text}</Button>
          </div>
        </FadeIn>
      </div>
      <div style={{ zIndex: 100, position: 'absolute', right: '-15%', marginRight: -50 - 0.01 * mouseWidth, top: 50 + 0.01 * mouseHeight, }}>
        <FadeIn play={play} direction='left'>
          <img className="hero__computerImage" alt="computer" src={process.env.PUBLIC_URL + '/herocomputer.png'} ></img>
        </FadeIn>
      </div>
    </div>
  )
}
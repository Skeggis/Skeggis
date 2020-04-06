import React from 'react'
import {Animate} from 'react-simple-animate'

export default function FadeIn(props){
  const {
    direction,
    delay,
    play
  } = props


  let start
  let end
  if(direction === 'left'){
    start={opacity: 0, transform: 'translateX(50%)'}
    end={opacity: 1, transform: 'translateX(0)'}
  } else if (direction==='up'){
    start = {opacity: 0, transform: 'translateY(50%)'}
    end = {opacity: 1, transform: 'translateY(0)'}
  } else {
    start = {opacity: 0, transform: 'translateX(-50%)'}
    end = {opacity: 1, transform: 'translateX(0)'}
  }

  return (
    <Animate
      play={play}
      start={start}
      end={end}
      easeType='ease'
      duration={0.7}
      delay={delay||0}
    >
      {props.children}
    </Animate>
  )
}
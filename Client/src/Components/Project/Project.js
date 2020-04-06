import React from 'react'
import './Project.scss'
import Button from '../Button/Button'
import FadeIn from '../FadeIn/FadeIn';

export default function Project(props) {
  const {
    data,
    currentIndex,
    myIndex
  } = props



  const right = data.id % 2 === 1;
  const play = currentIndex === myIndex

  return (

    <div className='project'>
      <div className={`project__slant-${right ? 'right' : 'left'}`} style={{ background: data.backgroundColor }} />
      <div className='project__topContainer'>
        <div className={`project__contentContainer ${right ? 'project__contentContainer--right' : ''}`}>
          <FadeIn play={play} direction={!right ? 'right' : 'left'} >
            <img alt={data.name} className='project__image' src={process.env.PUBLIC_URL + `/${data.image}`} />
          </FadeIn>
          <div className='project__textContainer'>
            <FadeIn play={play} direction={right? 'right':'left'} delay={0}>
            <h1 className='project__name'  >{data.name}</h1>
            </FadeIn>
            <FadeIn play={play} direction={right? 'right':'left'} delay={0.1}>
            <p style={{ marginBottom: 0 }} >{data.description}</p>
            </FadeIn>
            <div className='project__buttonContainer'>
              {data.buttons.map((button, i) => (
                <FadeIn play={play} direction={right?'right':'left'} delay={0.2+ (data.buttons.length-i)*0.08}>
                <div className='project__buttonWrapper'>
                  <Button className='project__button' buttonData={button}>{button.text}</Button>
                </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
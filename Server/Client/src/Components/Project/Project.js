import React, { Fragment, useState } from 'react'
import './Project.scss'
import Button from '../Button/Button'
import FadeIn from '../FadeIn/FadeIn';

export default function Project(props) {
  const {
    data,
    currentIndex,
    myIndex
  } = props

  const [imgHover, setImgHover] = useState(false)

  const right = data.id % 2 === 1;
  const play = currentIndex === myIndex

  function handleImgEnter() {
    setImgHover(true)
  }

  function handleImgLeave() {
    setImgHover(false)
  }

  return (

    <div className='project'>
      <div className={`project__slant-${right ? 'right' : 'left'}`} style={{ background: data.backgroundColor }} />
      <div className='project__topContainer'>
        <div className={`project__contentContainer ${right ? 'project__contentContainer--right' : ''}`}>
          <div className='project__imageContainer'>
            <FadeIn play={play} direction={!right ? 'right' : 'left'} >
              <img alt={data.name} className='project__image' src={process.env.PUBLIC_URL + `/${data.image}`} />
            </FadeIn>
            {/* {data.recommendation && (
              <div onMouseLeave={handleImgLeave} className={`project__medmaeli ${imgHover && 'project__medmaeli--hover'}`}>
                <img onMouseEnter={handleImgEnter} className='project__medmaeliMynd' src={process.env.PUBLIC_URL + data.recommendation.image} />
                <div className={`project__medmaeliTextContainer ${imgHover && 'project__medmaeliTextContainer--hover'}`} style={{display: 'flex', flexDirection: 'column', marginLeft: 10}}>
                  <p className={`project__medmaeliTexti ${imgHover && 'project__medmaeliTexti--hover'}`}>"test"</p>
            <p className='project__medmaeliNafn'>- {data.recommendation.name}, {data.recommendation.position}</p>
                </div>
              </div>
            )} */}
          </div>
          <div className='project__textContainer'>
            <FadeIn play={play} direction={right ? 'right' : 'left'} delay={0}>
              <h1 className='project__name'  >{data.name}</h1>
            </FadeIn>

            {data.description && (
              <FadeIn play={play} direction={right ? 'right' : 'left'} delay={0.1}>
                <p style={{ marginBottom: 0 }} >{data.description}</p>
              </FadeIn>
            )}

            {data.bullets && (
              <ul className='project__bulletsContainer'>
                {data.bullets.map((bullet, i) => (
                  <FadeIn play={play} direction={right ? 'right' : 'left'} delay={0.15 + i * 0.05}>
                    <li className='project__bullet'>
                      <span>
                        {bullet}
                      </span>
                    </li>
                  </FadeIn>
                ))}
              </ul>
            )}



            <div className='project__buttonContainer'>
              {data.buttons.map((button, i) => (
                <FadeIn play={play} direction={right ? 'right' : 'left'} delay={0.2 + (data.buttons.length - i) * 0.08}>
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
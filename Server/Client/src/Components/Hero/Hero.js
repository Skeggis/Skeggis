import React, { useEffect, useState } from 'react'
import './Hero.scss'
import Button from '../Button/Button'
import FadeIn from '../FadeIn/FadeIn'
// import Þórður from process.env.PUBLIC_URL + "blackPerson2.png"
// import Róbert from process.env.PUBLIC_URL + "blackPerson1.png"

export default function Hero(props) {
  const {
    data,
    currentIndex,
    myIndex,
    fullpageApi
  } = props


  const play = currentIndex === myIndex
  //Skegg: darkRock eða grayRock

  //darkGreen
  //lightMoss
  //blueMan
  //golden
  //darkBlue
  //crystal
  //grayRock
  //darkRock
  //darkSea
  //whiteCrystal
  //orangeMat
  //mtBlanc 1
  //sheetWhite
  //ice
  const filter = " hero__darkRockFilter"
  const backCol = " lemon"

  return (
    <div className="hero">
      <div className={'hero__test' + backCol}></div>
      <div className='hero__wrapper'>
        <div className="hero__firstContainer">

          <div className='hero__hiddenContainer'>
          <FadeIn play={play}>
            <div className="hero__flexIt">
              <h1 className="hero__name">{data.name}</h1>
              <div className="hero__logo" >
                <div className="" >
                  <img className={"hero__logoImg" + filter} src={process.env.PUBLIC_URL + `/blackPerson2.png`} ></img>
                </div>
                <div className="" >
                  <img className={"hero__logoImg" + filter} src={process.env.PUBLIC_URL + `/blackPerson1.png`}></img>
                </div>
              </div>
            </div>
          </FadeIn>
          </div>

          <div className='hero__hiddenContainer'>
            <FadeIn play={play} delay={0.05}>
              <p className="hero__desc">{data.description}</p>
            </FadeIn>
          </div>
          <div className='hero__hiddenContainer'>
            <FadeIn play={play} delay={0.1}>
              <div className='hero__buttonContainer' >
                <Button buttonData={data.button} fullpageApi={fullpageApi} >{data.button.text}</Button>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className='hero__imageContainer'>
          <FadeIn play={play} direction='left'>
            <img className="hero__computerImage" alt="computer" src={process.env.PUBLIC_URL + '/herocomputer.png'} ></img>
          </FadeIn>
        </div>
      </div>

    </div>
  )
}
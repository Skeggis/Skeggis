import React from 'react'
import Button from '../Button/Button'
import './Contact.scss'
import FadeIn from '../FadeIn/FadeIn';


export default function Contact(props) {
  const {
    data,
    currentIndex,
    myIndex
  } = props

  const right = data.id % 2 === 1;
  const play=currentIndex === myIndex
  return (
    <div className='contact'>
      <div className={`contact__slant-${right ? 'right' : 'left'}`} style={{ background: data.backgroundColor }} />
      <div className='contact__topContainer'>
        <FadeIn play={play} delay={0.5} direction='up'>

        <div className='contact__formContainer'>
          <div className='contact__row'>
            <div className='contact__inputContainer'>
              <label for='name' className='contact__label'>Nafn</label>
              <input className='contact__input' type='text' name='name' />
            </div>
            <div className='contact__inputContainer' style={{ marginLeft: 20 }}>
              <label for='email' className='contact__label'>Póstfang</label>
              <input className='contact__input' type='email' name='email' />
            </div>

          </div>
          <div className='contact__textAreaContainer'>
            <label className='contact__label' for='content'>Fyrirspurn</label>
            <textarea className='contact__input contact__textarea' name='content' rows={5} />
          </div>
          <div className='contact__buttonContainer'>
            <Button buttonData={data.button}>{data.button.text}</Button>
          </div>
        </div>
        </FadeIn>

      </div>
    </div>
  )
}
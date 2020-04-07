import React, { useState } from 'react'
import Button from '../Button/Button'
import './Contact.scss'
import FadeIn from '../FadeIn/FadeIn';
import axios from 'axios';


export default function Contact(props) {
  const {
    data,
    currentIndex,
    myIndex
  } = props

  const [info, setInfo] = useState({
    name: '',
    email: '',
    subject: ''
  });

  var handleSubmit = async (event) => {
    event.preventDefault()
    //TODO: show some type of error message.
    if (info.name.length === 0) { return }
    if (info.email.length === 0) { return }
    if (info.subject.length === 0) { return }

    try {
      let response = await axios.post(process.env.REACT_APP_PUBLIC_URL + '/contact', {
        name: info.name,
        email: info.email,
        subject: info.subject
      })

        const data = response.data
        if (data.success) {
          const messageToUser = data.message
          //TODO: Show success message
        } else if (data.errors) {
          //TODO: Show errors array
        } else {
          //TODO: Show error when no messages sent from server
        }
    } catch (error) {
      if(error.response){
        var errorMessages = error.response.data.errors //array of strings
        //TODO: show our error
      } else {
        //TODO: show error not from our server
      }
    }
    
  }

  var handleChange = (event) => {
    let input = event.target.name
      info[input] = event.target.value
      setInfo(info)
  }

  const right = data.id % 2 === 1;
  const play = currentIndex === myIndex
  return (
    <div className='contact'>
      <div className={`contact__slant-${right ? 'right' : 'left'}`} style={{ background: data.backgroundColor }} />
      <div className='contact__topContainer'>
        <FadeIn play={play} delay={0.5} direction='up'>

          <form onSubmit={(event) => handleSubmit(event)}>
            <div className='contact__formContainer'>
              <div className='contact__row'>
                <div className='contact__inputContainer' style={{ paddingRight: 10 }}>
                  <label for='name' className='contact__label'>Nafn</label>
                  <input className='contact__input' type='text' name='name' onChange={handleChange} required/>
                </div>
                <div className='contact__inputContainer'>
                  <label for='email' className='contact__label'>Póstfang</label>
                  <input className='contact__input' type='email' name='email' onChange={handleChange} required/>
                </div>

              </div>
              <div className='contact__textAreaContainer'>
                <label className='contact__label' for='subject'>Fyrirspurn</label>
                <textarea className='contact__input contact__textarea' name='subject' rows={5} onChange={handleChange} required/>
              </div>
              <div className='contact__buttonContainer'>
                <Button buttonData={data.button}>{data.button.text}</Button>
              </div>
            </div>
          </form>
        </FadeIn>

      </div>
    </div>
  )
}
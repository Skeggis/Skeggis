import React, { useState } from 'react'
import Button from '../Button/Button'
import './Contact.scss'
import FadeIn from '../FadeIn/FadeIn';
import axios from 'axios';
import { withSnackbar } from 'notistack';


function Contact(props) {
  const {
    data,
    currentIndex,
    myIndex,
    enqueueSnackbar
  } = props

  const [info, setInfo] = useState({
    name: '',
    email: '',
    subject: ''
  });

  const [loading, setLoading] = useState(false)

  function showMessage(message, variant){
    enqueueSnackbar(message, {variant})
  }

  var handleSubmit = async (event) => {
    event.preventDefault()
    if(loading){
      return
    }
    setLoading(true)
    if (info.name.length === 0) { 
      showMessage('Sláðu inn nafn.', 'error')
      return
    }
    if (info.email.length === 0) { 
      showMessage('Sláðu inn póstfang.', 'error')
      return
    }
    if (info.subject.length === 0) {
      showMessage('Sláðu inn fyrirspurn.', 'error')
      return
    }

    try {
      let response = await axios.post(process.env.REACT_APP_PUBLIC_URL + '/api/contact', {
        name: info.name,
        email: info.email,
        subject: info.subject
      })

        const data = response.data
        if (data.success) {
          showMessage(data.message, 'success')
        } else if (data.errors) {
          data.errors.forEach(error => {
            showMessage(error, 'error')
          });
        } else {
          showMessage('Eitthvað fór úrskeiðis. Reyndu aftur.', 'error')
        }
    } catch (error) {
      if(error.response){
        const errorMessages = error.response.data.errors
        errorMessages.forEach(error => {
          showMessage(error, 'error')
        })
      } else {
        showMessage('Eitthvað fór úrskeiðis. Reyndu aftur.', 'error')
      }
    } finally{
      setLoading(false)
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
                  <label htmlFor='name' className='contact__label'>Nafn</label>
                  <input className='contact__input' type='text' name='name' onChange={handleChange} required/>
                </div>
                <div className='contact__inputContainer'>
                  <label htmlFor='email' className='contact__label'>Póstfang</label>
                  <input className='contact__input' type='email' name='email' onChange={handleChange} required/>
                </div>

              </div>
              <div className='contact__textAreaContainer'>
                <label className='contact__label' htmlFor='subject'>Fyrirspurn</label>
                <textarea className='contact__input contact__textarea' name='subject' rows={5} onChange={handleChange} required/>
              </div>
              <div className='contact__buttonContainer'>
                <Button loading={loading} buttonData={data.button}>{data.button.text}</Button>
              </div>
            </div>
          </form>
        </FadeIn>

      </div>
    </div>
  )
}

export default withSnackbar(Contact);
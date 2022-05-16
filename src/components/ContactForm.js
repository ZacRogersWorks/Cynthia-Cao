import React, { useEffect, useRef, useState } from 'react'
import SuccessCard from './SuccessCard'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState('There was a problem trying to send your message. Please try again.')

  const { name, email, message } = formState

  const handleSubmit = (e) => {
    setSending(true)
    const payload = encode({ "form-name": "cynthiacao.xyz", ...formState })

    fetch("/", {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload
    })
      .then(() => {
        setSent(true)
        setSending(false)
        setTimeout(() => {
          setFormState({ name: '', email: '', message: '' })
        }, 300)
      })
      .catch(err => {
        setError(err.toString())
        setIsError(true)
      })

    e.preventDefault()

  }

  const handleChange = e => setFormState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))

  return (
    <>
      <SuccessCard setSent={setSent} sending={sending} sent={sent} />
      <form
        name="cynthiacao.xyz"
        data-netlify="true"
        method="POST"
        className={`form-control`}
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {isError && (
          <div className='form-control__error'>
            <p>👽 Error: {error}</p>
          </div>
        )}
        <input type="hidden" name="form-name" value="cynthiacao.xyz" />
        <div className='form-control__group c1'>
          <input className='form-control__input' onChange={handleChange} type="text" id="name" name="name" value={name} placeholder=" " required></input>
          <label className='form-control__label c1' htmlFor='name'>Name</label>
        </div>
        <div className='form-control__group c2'>
          <input className='form-control__input' onChange={handleChange} type="email" id="email" name="email" value={email} placeholder=" " required></input>
          <label className='c2' htmlFor='email'>E-mail</label>
        </div>
        <div className='form-control__group c3'>
          <textarea className='form-control__input form-control--textarea' onChange={handleChange} id="message" name="message" placeholder=" " value={message} required></textarea>
          <label className='c3' htmlFor='message'>Message</label>
        </div>
        <button className="btn" type="submit">Submit</button>
      </form>
    </>
  )
}

export default ContactForm
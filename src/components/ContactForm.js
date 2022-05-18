import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";

import { ANIMATION_VARIANTS } from './ANIMATION_VARIANTS';

import SuccessCard from './SuccessCard'

const encode = (data) => {
  // Post
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

function ContactForm() {

  // Animate heading on scroll
  const headingControls = useAnimation();
  const [headingMotionRef, headingInView] = useInView();
  useEffect(() => {
      if (headingInView) {
          headingControls.start("show")
      }
  }, [headingControls, headingInView])

  // Animate contact form on scroll
  const formControls = useAnimation();
  const [formMotionRef, formInView] = useInView();
  useEffect(() => {
      if (formInView) {
          formControls.start("show")
      }
  }, [formControls, formInView])


  // Handling form submission to Netlify
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
      <motion.div className="heading-container"
        variants={ANIMATION_VARIANTS.contactHeading}
        initial="hidden"
        animate={headingControls}
        ref={headingMotionRef}
      >
        <h2 className="header--primary">Contact me</h2>
      </motion.div>
      <SuccessCard setSent={setSent} sending={sending} sent={sent} />
      <motion.form
        name="cynthiacao.xyz"
        data-netlify="true"
        method="POST"
        className={`form-control`}
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}

        variants={ANIMATION_VARIANTS.contactForm}
        initial="hidden"
        animate={formControls}
        ref={formMotionRef}
      >
        {isError && (
          <div className='form-control__error'>
            <p>👽 Error: {error}</p>
          </div>
        )}
        <input type="hidden" name="form-name" value="cynthiacao.xyz" />
        <motion.div className='form-control__group c1' variants={ANIMATION_VARIANTS.contactFormElements}>
          <input className='form-control__input' onChange={handleChange} type="text" id="name" name="name" value={name} placeholder=" " required></input>
          <label className='form-control__label c1' htmlFor='name'>Name</label>
        </motion.div>
        <motion.div className='form-control__group c2' variants={ANIMATION_VARIANTS.contactFormElements}>
          <input className='form-control__input' onChange={handleChange} type="email" id="email" name="email" value={email} placeholder=" " required></input>
          <label className='c2' htmlFor='email'>E-mail</label>
        </motion.div>
        <motion.div className='form-control__group c3' variants={ANIMATION_VARIANTS.contactFormElements}>
          <textarea className='form-control__input form-control--textarea' onChange={handleChange} id="message" name="message" placeholder=" " value={message} required></textarea>
          <label className='c3' htmlFor='message'>Message</label>
        </motion.div>
        <motion.button className="btn" type="submit" variants={ANIMATION_VARIANTS.contactFormElements}>Submit</motion.button>
      </motion.form>
    </>
  )
}

export default ContactForm
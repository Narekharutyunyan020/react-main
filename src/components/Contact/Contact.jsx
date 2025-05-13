import React from 'react'
import cont from './Contact.module.css'

const Contact = () => {
  return (
  <section className={cont.contact}>
  <h2>Contact Us</h2>
  <form className={cont.contactForm}>
    <input type="text" name="name" placeholder="Your Name" required />
    <input type="email" name="email" placeholder="Your Email" required />
    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
    <button type="submit">Submit</button>
  </form>
</section>

  )
}

export default Contact
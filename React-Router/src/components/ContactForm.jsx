// import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <form>
        <input type="text" placeholder='Name' />
        <br />
        <input type="email" placeholder='email' />
        <br />
        <textarea placeholder='message'></textarea>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ContactForm
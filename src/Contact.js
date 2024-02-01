import React from 'react';
import './App.css'

const Contact = () => {
  return (
    <div className="form-container">
    <div className="form">
        <span className="heading">Get in touch</span>
        <input placeholder="Name" type="text" className="input" required/>
        <input placeholder="Email" id="mail" type="email" className="input" required/>
        <textarea placeholder="How can seat cafe help you" rows="10" cols="30" id="message" name="message" className="textarea" required></textarea>
        <div className="button-container">
        <div className="send-button">Send</div>
    </div>
</div>
</div>
  )
}

export default Contact;
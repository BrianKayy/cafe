import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer'>
      <footer>The seat cafe</footer>
      <div className="contact">      
      <h5>Tel:_</h5>
      <h5>Email:theseatcafe22@gmail.com</h5></div>

      <div className="social-media">
       <Link>instagram <i class="fa-brands fa-facebook"></i></Link>
       <Link>facebook <i class="fa-brands fa-instagram"></i></Link>
       <Link>whatsApp <i class="fa-brands fa-whatsapp"></i></Link>
      </div>
    </div>
  )
}

export default Footer;
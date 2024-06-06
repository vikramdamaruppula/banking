import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div style={{background:'#000'}}>
    <div className='footer-main'>
        <div className='footer-top'>
            <img  className="logo" src='https://pbs.twimg.com/profile_images/1191518282823520256/CBLoZGkV_400x400.png' alt='bankLogo' />
            <h3 style={{color:'#fff'}}>Silber Private Bank</h3>
        </div>
        <div className='footer-middle'>
            <h3 style={{color:'#fff'}}>Quick Links</h3>
            <p> Our Bank</p>
            <p> InvestMent Research</p>
            <p> Other Products</p>
            <p> Financing</p>
            <p> Contact Us</p>

        </div>
        <div className='footer-middle'>
            <h3 style={{color:'#fff'}}>Company</h3>
            <p > Latest News</p>
            <p> Terms And Conditions</p>
            <p> Privacy Policy</p>
            <p> Our Bank</p>

        </div>
        <div className='footer-middle'>
            <h3 style={{color:'#fff'}}>Follow Us</h3>
            <p> facebook</p>
            <p> Twitter</p>
            <p> Instagram</p>
            <p> LinkedIn</p>

        </div>

    </div>
        <div style={{display:'flex',flexDirection:'column',marginLeft:'8.5rem'}}>
            <h3 style={{color:'#fff'}} > Disclaimer:- </h3>
            <p style={{color:'#fff'}}>lorem jnknkdnckdnknvkfdnvknvkdnvknvkndkndkn jkdnk  en e kn  en k n  en </p>
        </div>
    </div>
  )
}

export default Footer
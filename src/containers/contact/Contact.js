import React from 'react'
import Hadding from '../../components/hadding/Hadding'

// css
import "./contact.css"

// mui
import { Grid } from '@mui/material'

export default function Contact() {
  return (
    <div>
      <Hadding title='GET IN TOUCH'/>
      <div className='content'>
      <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237684.5851808785!2d40.01136280731161!3d21.436254372948113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21b4ced818775%3A0x98ab2469cf70c9ce!2z2YXZg9ipINin2YTZhdmD2LHZhdip!5e0!3m2!1sar!2ssa!4v1691798330589!5m2!1sar!2ssa"} width="100%" height="450" style={{border:"0"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <Grid container my={{xs:'30px', md:'60px'}}>
        <Grid item xs={12} md={6}>
          <div className=' contact-info'>
            <p className='p-title'>Write me</p>
            <a href='babks93@gmail.com'>Example@example.com</a>
          </div>

          <div className='contact-info'>
            <p className='p-title'>My office</p>
            <p>
            1444 S. Ksa Street Makkah,<br/>
            jbl alnor 14
            </p>
          </div>

          <div className=" contact-info social">
                <p className="p-title">Follow us</p>
                <a href="/">Facebook.</a>
                <a href="/">Twitter.</a>
                <a href="/">Instagram.</a>
                <a href="/">Linkedin.</a>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
        <form >
          <div >
            <input className="inp" name="name" type="text" placeholder="Name" id="name"/>
          </div>

          <div >
            <input className="inp" name="email" type="email" placeholder="Email" id="email"/>
          </div>
        <div >
          <input className="inp" name="company" type="text" placeholder="Company" id="company"/>
      </div>
          <div >
              <textarea className="inp" name="comments" id="comments" rows="3" placeholder="Tell me about your project"></textarea>
          </div>
          <div className="form-btn col-xl-12 contact-bar">
            <button className="site-btn" onClick={(e)=> e.preventDefault()}>Send</button>
          </div>
        </form>
        </Grid>
      </Grid>
      </div>
    </div>
  )
}

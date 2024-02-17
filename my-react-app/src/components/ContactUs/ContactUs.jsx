import React from 'react'
import './Contactus.css'
export default function ContactUs() {
    return (
        <>
        <div id='temp' style={{height:'40px'}}></div>
        <div id='contactUs'>
            <div className="contact">
                <h2>Contact Us</h2>
            </div>
            <form>

                <div className="form-group name">
                    <input type="text" className="form-control" id="name" placeholder="Name" required/>
                </div>
                <div className="form-group email">
                    <input type="email" className="form-control" id="email" placeholder="Email" required />
                </div>

                <div className="form-group subject">
                    <input type="text" className="form-control" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group message">
                    <textarea name="" id="" cols="72" rows="3" placeholder="Message" required></textarea>
                </div>

                <button type="submit" className="btn btn-primary">SEND MESSAGE</button>
            </form>
        </div>
        </>
    )
}

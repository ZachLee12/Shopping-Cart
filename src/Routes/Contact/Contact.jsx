import React from "react";
import Mountain1 from '../../assets/images/mountain1.jpeg'
import Mountain2 from '../../assets/images/mountain2.jpg'
import LocationIcon from '../../assets/images/location.png'
import EmailIcon from '../../assets/images/email.png'

export default function Contact() {

    return (
        <div id="Contact">

            <div className="contact-content">
                <iframe
                    className="google-maps-iframe"
                    width="100%" height="350" frameborder="0" style={{ border: 0 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"></iframe>
                <div className="linkedIn-info-wrapper info-wrapper">
                    <img src={EmailIcon} className="icon" />
                    <p className='info-paragraph'>
                        Zach Lee
                    </p>

                </div>
                <div className="location-info-wrapper info-wrapper">
                    <img src={LocationIcon} className="icon" />
                    <p className='info-paragraph'>
                        Strasse, 6006 Kanton
                    </p>
                </div>

                <div className="email-info-wrapper info-wrapper">
                    <img src={EmailIcon} className="icon" />
                    <p className='info-paragraph'>
                        notmyemail@email.com
                    </p>
                </div>
            </div >
        </div >
    )
}
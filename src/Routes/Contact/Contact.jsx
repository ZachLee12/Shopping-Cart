import React from "react";
import HikingZach from '../../assets/images/hiking-zach.jpg'
import Mountain1 from '../../assets/images/mountain1.jpeg'
import Mountain2 from '../../assets/images/mountain2.jpg'
import LinkedInIcon from '../../assets/images/linkedin.png'
import LocationIcon from '../../assets/images/location.png'
import EmailIcon from '../../assets/images/email.png'

export default function Contact() {

    return (
        <div id="Contact">
            <div className="contact-content">
                <section className="linkedIn-section-wrapper section-wrapper">
                    <img src={Mountain1} className="linkedIn-info-image info-image" />
                    <div className="linkedIn-info-wrapper info-wrapper">
                        <img src={EmailIcon} className="icon" />
                        <p className='info-paragraph'>
                            Zach Lee
                        </p>

                    </div>
                </section>
                <section className="location-section-wrapper section-wrapper">
                    <div className="location-info-wrapper info-wrapper">
                        <img src={LocationIcon} className="icon" />
                        <p className='info-paragraph'>
                            Strasse, 6006 Kanton
                        </p>
                    </div>
                    <img src={Mountain1} className="location-info-image info-image" />
                </section>

                <section className="email-section-wrapper section-wrapper">
                    <img src={Mountain2} className="email-info-image info-image" />
                    <div className="email-info-wrapper info-wrapper">
                        <img src={EmailIcon} className="icon" />
                        <p className='info-paragraph'>
                            notmyemail@email.com
                        </p>
                    </div>
                </section>
            </div >
        </div >
    )
}
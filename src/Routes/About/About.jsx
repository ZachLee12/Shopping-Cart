import React from 'react'
import HikingImage from '../../assets/images/hiking.webp'

export default function About() {

    return (
        <div id='About'>
            <div className='about-us-content-wrapper'>

                <div className="about-us-content">
                    <div className="about-us-float-container"></div>
                    <p className='about-us-title'>About Us</p>
                    <img className='about-us-image' src={HikingImage} alt="" />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ab cumque id, consequatur voluptatum, voluptatibus magnam unde expedita deserunt ipsa in. Eaque vero deleniti eligendi esse, odit sed nemo nisi.
                    Dolorum provident pariatur, quas, nihil dolor, commodi consequatur adipisci non ab asperiores harum minus? Eligendi ut distinctio, totam alias doloribus cum voluptatem ipsum velit a incidunt commodi cumque minus omnis.
                </div>
            </div>
        </div>
    )
}
import React from 'react'
import HikingImage from '../../assets/images/hiking.webp'
import HikingImage2 from '../../assets/images/hiking2.jpg'
import HikingImageSmall from '../../assets/images/hiking-small.jpg'

export default function About() {

    return (
        <div id='About'>
            <div className="about-us-position-div small" id='below-1150px'>
                <img className='about-us-image-above-1150px' id='below-1150px' src={HikingImage2} alt="" />
                <img src={HikingImage} className="about-us-image-below-1150px" id='below-1150px' />
            </div>
            <div className='about-us-content-wrapper' id='below-1150px'>

                <div className="about-us-content">
                    <div className="about-us-float-container" id='below-1150px'></div>
                    <img src={HikingImageSmall} className='about-us-image small' />

                    <div className="about-us-text-content-wrapper" id='below-1150px' >
                        <div className="text-content-float-container small" id='below-1150px'></div>
                        <p className='about-us-title small'>About Us</p>
                        <div className="about-us-text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ab cumque id, consequatur voluptatum, voluptatibus magnam unde expedita deserunt ipsa in. Eaque vero deleniti eligendi esse, odit sed nemo nisi.
                            Dolorum provident pariatur, quas, nihil dolor, commodi consequatur adipisci non ab asperiores harum minus? Eligendi ut distinctio, totam alias doloribus cum voluptatem ipsum velit a incidunt commodi cumque minus omnis.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
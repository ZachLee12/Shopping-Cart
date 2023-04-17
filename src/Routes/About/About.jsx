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
                            At our hiking gear shop, we understand the importance of having reliable and high-quality equipment when exploring the great outdoors. Whether you're a seasoned adventurer or just starting out, we have everything you need to make your next hike safe, comfortable, and enjoyable.

                            Our team consists of experienced hikers and outdoor enthusiasts who are passionate about helping you find the perfect gear for your next adventure. 

                            We also understand the importance of sustainability and minimizing our impact on the environment. Come visit us today and let us help you gear up for your next outdoor excursion!
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
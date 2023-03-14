import React from 'react'
import PlaceholderImage from '../../assets/images/placeholderImage.jpg'

export default function MainPage() {
    return (
        <React.Fragment>
            {
                <div id='MainPage'>
                    <div className="shop-introduction-container">
                        <p className='shop-title'>Main Shop</p>
                        <p className='shop-description'>Some other description about this main shop</p>
                    </div>
                    <div className="vertical-line"></div>

                    <img src={PlaceholderImage} className='shop-image' />

                </div>}
        </React.Fragment>
    )

}
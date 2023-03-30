import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PlaceholderImage from '../../assets/images/placeholderImage.jpg'
import OtherPlaceholderImage from '../../assets/images/clothes6.jpg'

export default function MainPage() {

    const initialState = {
        
    }

    const [state, setState] = useState();



    return (
        <React.Fragment>
            <div id='MainPage'>
                <div className="shop-introduction-container">
                    <p className='shop-title'>Main Shop</p>
                    <p className='shop-description'>Some other description about this main shop</p>
                </div>
                <div className="vertical-line-and-shop-image-wrapper">
                    <div className="vertical-line">
                        <div className='hidden-contents'>
                            <img src={OtherPlaceholderImage} alt="" />
                        </div>
                    </div>
                    <img src={PlaceholderImage} className='shop-image' />
                </div>

            </div>
        </React.Fragment>
    )

}
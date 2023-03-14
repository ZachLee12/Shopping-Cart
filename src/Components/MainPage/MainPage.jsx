import React from "react"

export default function MainPage({ shouldMount }) {
    return (
        <React.Fragment>
            {shouldMount && <div id='MainPage'>
                <div className="shop-introduction-container">
                    <p className='shop-title'>Main Shop</p>
                    <p className='shop-description'>Some other description about this main shop</p>
                </div>
                <div className="vertical-line"></div>
                <div className='image-positioning-container'>
                    <div className="image-container"></div>
                </div>
            </div>}
        </React.Fragment>
    )

}
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PlaceholderImage from '../../assets/images/placeholderImage.jpg'
import OtherPlaceholderImage from '../../assets/images/clothes6.jpg'
import Image3 from '../../assets/images/clothes1.jpg'
import Image4 from '../../assets/images/clothes2.webp'
import Image5 from '../../assets/images/clothes3.webp'

export default function MainPage() {
    const carouselImageList =
        [OtherPlaceholderImage,
            PlaceholderImage,
            Image3,
            Image4,
            Image5]

    const initialState = {
        currentImageIndex: 0,
        currentCarouselImage: carouselImageList[0]
    }

    const [state, setState] = useState(initialState);

    const nextCarouselImage = (e) => {
        let nextIndex = state.currentImageIndex;
        (new Promise(res => {
            if (nextIndex == carouselImageList.length - 1) {
                nextIndex = 0
            } else {
                nextIndex = state.currentImageIndex + 1;
            }
            res(nextIndex)
        })).then((next) => {
            setState({
                currentImageIndex: next,
                currentCarouselImage: carouselImageList[next]
            })
        }
        )
    }

    const previousCarouselImage = (e) => {
        let nextIndex = state.currentImageIndex;
        (new Promise(res => {
            if (nextIndex == 0) {
                nextIndex = carouselImageList.length - 1
            } else {
                nextIndex = state.currentImageIndex - 1;
            }
            res(nextIndex)
        })).then((next) => {
            setState({
                currentImageIndex: next,
                currentCarouselImage: carouselImageList[next]
            })
        }
        )
    }


    return (
        <React.Fragment>
            <div id='MainPage'>
                <div className="shop-introduction-container">
                    <p className='shop-title'>Main Shop</p>
                    <p className='shop-description'>Some other description about this main shop</p>
                </div>
                <div
                    className="vertical-line-and-shop-image-wrapper">
                    <div
                        className="vertical-line">
                        <div className='hidden-contents'>
                            <img
                                className='carousel-image'
                                src={state.currentCarouselImage} alt="" />

                            <div className="index-bullets-wrapper">
                                <div className={`index-bullet ${state.currentImageIndex === 0 ? 'active-bullet' : ''}`}></div>
                                <div className={`index-bullet ${state.currentImageIndex === 1 ? 'active-bullet' : ''}`}></div>
                                <div className={`index-bullet ${state.currentImageIndex === 2 ? 'active-bullet' : ''}`}></div>
                                <div className={`index-bullet ${state.currentImageIndex === 3 ? 'active-bullet' : ''}`}></div>
                                <div className={`index-bullet ${state.currentImageIndex === 4 ? 'active-bullet' : ''}`}></div>
                            </div>

                            <div className="index-buttons-wrapper">
                                <button
                                    className='previous-btn'
                                    onClick={previousCarouselImage}
                                >previous</button>
                                <button
                                    className='next-btn'
                                    onClick={nextCarouselImage}
                                >next
                                </button>
                            </div>
                        </div>
                    </div>
                    <img src={PlaceholderImage} className='shop-image' />
                </div>

            </div>
        </React.Fragment>
    )

}
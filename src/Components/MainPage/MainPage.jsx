import React, { useState } from 'react'

import Mountain from '../../assets/images/Placeholder.jpg'
import Backpack2 from '../../assets/images/shopItem2-backpack.jpg'
import Jacket2 from '../../assets/images/shopItem11-jacket.webp'
import Backpack3 from '../../assets/images/shopItem3-backpack.webp'
import HikingSticks from '../../assets/images/shopItem4-sticks.webp'
import HikingGearSet from '../../assets/images/shopItem1-backpack.jpg'

export default function MainPage() {
    const carouselImageList =
        [Backpack2,
            HikingSticks,
            Backpack3,
            Jacket2,
            HikingGearSet]

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
                    <p className='shop-title'>Hiker. AG</p>
                    <p className='shop-description'>In every walk with nature, you receive far more than you seek.</p>
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
                    <img src={Mountain} className='shop-image medium' />
                </div>

            </div>
        </React.Fragment>
    )

}
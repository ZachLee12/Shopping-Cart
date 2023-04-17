import React, { useEffect } from 'react'
import { itemList as fullItemList } from "../../shopItems"
import { Link } from 'react-router-dom';

// Checkout works a little different. It has no state.
// Since a button must be clicked to mount Checkout, it will directly update itself by
//calling searchCart().
// A state is a bit redundant, as it will need to update its state, then push the changes to 
// shopItem.js again.
export default function Checkout({ renderCheckout, handleClickUnmountCheckout, }) {

    const searchCart = (() => {
        return fullItemList.filter(item => item.addedToCart)
    })();

    const getFinalPrice = (list) => {
        let totalItemPrices = []
        list.forEach((item) => {
            totalItemPrices.push(Number(item.totalPrice))
        })
        if (totalItemPrices.length > 0) {
            return (totalItemPrices.reduce((acc, curr) => acc += curr)).toFixed(2)
        } else {
            return null;
        }
    }

    return (
        <div id="Checkout-fullscreen-wrapper" className={renderCheckout ? '' : 'Checkout-wrapper-slide-out'}>
            <div id="Checkout-wrapper">
                <div id='Checkout'>
                    <h1 className="checkout-title">CHECKOUT</h1>
                    <div className="checkout-items-wrapper">
                        {searchCart.map(item =>
                            <div key={item.id} className='checkout-item'>
                                <img className='checkout-item-image' src={item.image} alt="shop-item-image" />
                                <div className="checkout-item-details-wrapper">
                                    <p className='checkout-item-name item-detail'>{item.name}</p>
                                    <p className='checkout-item-unit-price item-detail'>Unit price: {item.price}</p>
                                    <p className='checkout-item-units item-detail'>Units: {item.units}</p>
                                    <p className='checkout-item-total-price item-detail'>Total Price: {Number(item.totalPrice).toFixed(2)} CHF</p>
                                </div>
                            </div>
                        )}
                        <p className='final-price'>Final Price: {getFinalPrice(searchCart) + ' CHF'}</p>

                    </div>
                    <div className="link-and-button-wrapper">
                        <Link
                            to={'/thankyou'}
                            // onClick={handleClickUnmountCheckout}
                            className="buy-now-link clickable">
                            Buy now!
                        </Link>
                        <button
                            onClick={handleClickUnmountCheckout}
                            className="go-back-to-cart-button clickable"> Go back to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
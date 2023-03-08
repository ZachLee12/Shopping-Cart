import React, { useEffect } from 'react'
import { itemList as fullItemList } from "../../shopItems"


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
                                <p>{item.name}</p>
                                <img src={item.image} alt="shop-item-image" />
                                <p>Unit price: {item.price}</p>
                                <p>Units: {item.units}</p>
                                <input type="number" />
                            </div>
                        )}
                        <p>Final Price: {getFinalPrice(searchCart)}</p>

                    </div>
                    <button
                        onClick={handleClickUnmountCheckout}
                        className="buy-now-button">
                        Buy now!
                    </button>
                </div>
            </div>
        </div>
    )
}
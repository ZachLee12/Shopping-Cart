import React, { useEffect } from "react"

export default function Checkout({ itemList, renderCheckout, handleClickUnmountCheckout, }) {

    useEffect(() => {

    })

    return (
        <React.Fragment>
            

                <div id="Checkout-fullscreen-wrapper" className={renderCheckout ? '' : 'Checkout-wrapper-slide-out'}>
                    <div id="Checkout-wrapper">
                        <div id='Checkout'>
                            <h1 className="checkout-title">CHECKOUT</h1>
                            <div className="checkout-items-wrapper">
                                {itemList.map(item =>
                                    <div key={item.id} className='checkout-item'>
                                        <p>{item.name}</p>
                                        <img src={item.image} alt="" />
                                    </div>
                                )}
                            </div>
                            <button
                                onClick={handleClickUnmountCheckout}
                                className="buy-now-button">
                                Buy now!
                            </button>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}
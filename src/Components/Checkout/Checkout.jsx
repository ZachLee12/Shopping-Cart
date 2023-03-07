import React, { useEffect } from "react"

export default function Checkout({ itemList, renderCheckout, handleClickUnmountCheckout, }) {

    useEffect(() => {

    })

    return (
        <React.Fragment>
            {renderCheckout &&

                <div id='Checkout'>
                    <h1>CHECKOUT</h1>
                    {itemList.map(item =>
                        <div key={item.id}>
                            <p>{item.name}</p>
                            <img src={item} alt="" />
                        </div>
                    )}
                    <button
                        onClick={handleClickUnmountCheckout}
                        className="buy-now-button">
                        Buy now!
                    </button>
                </div>}
        </React.Fragment>
    )
}
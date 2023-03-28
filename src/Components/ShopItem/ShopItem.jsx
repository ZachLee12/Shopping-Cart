import React, { createContext, useContext, useEffect } from "react";
import FilledStar from '../../assets/images/filled-star.png'
import EmptyStar from '../../assets/images/empty-star.png'
import { searchItems } from "../../shopItems";
import '../../assets/fonts/Roboto/Roboto-Medium.ttf'

export default function ShopItem(props) {
    let targetItem = searchItems(props.name)[0]
    const [shopItem, setShopItem] = React.useState(targetItem)

    const handleChangeUnits = (e) => {
        setShopItem({
            ...shopItem,
            units: e.target.value,
            totalPrice: (e.target.value * shopItem.price).toFixed(2)
        })
    }

    //sync data with shopItem.js
    useEffect(() => {
        // to keep it in sync with central shopItems.js
        targetItem = Object.assign(targetItem, shopItem);
    }, [shopItem])

    return (
        <React.Fragment>
            <figure className="ShopItem">
                <img className="ShopItem-image" src={props.image} alt="" />
                <figcaption>
                    <p className="ShopItem-name">{props.name}</p>
                    {/* <p className="ShopItem-description">{props.description}</p> */}
                    <p className="price">{props.price}</p>

                    {props.displayAsCartItem &&
                        <div className="cart-information-wrapper">
                            <p>Units: {shopItem.units} </p>
                            <input
                                min={1}
                                max={100}
                                type="number"
                                onChange={handleChangeUnits}
                                defaultValue={shopItem.units}
                            />
                            <p>Total: {shopItem.totalPrice}</p>
                        </div>
                    }

                    <div className="star-and-cart-wrapper">
                        <img className="favourite-star"
                            id={props.id}
                            onClick={props.handleClickIsFavourite}
                            src={props.isFavourite ? FilledStar : EmptyStar}
                        />
                        <button
                            className="added-to-cart-button"
                            id={props.id}
                            onClick={props.handleClickAddToCart}>
                            {props.addedToCart ? '✔ Added to Cart' : 'Add to Cart'}
                        </button>
                    </div>
                </figcaption>
            </figure>
        </React.Fragment>
    )
}
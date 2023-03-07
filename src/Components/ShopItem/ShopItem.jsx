import React, { useEffect } from "react";
import FilledStar from '../../assets/images/filled-star.png'
import EmptyStar from '../../assets/images/empty-star.png'
import { searchItems } from "../../shopItems";

export default function ShopItem(props) {

    let targetItem = searchItems(props.name)[0]

    const [shopItem, setShopItem] = React.useState(targetItem)

    const handleChangeUnits = (e) => {

            setShopItem({
                ...shopItem,
                units: e.target.value,
            })
        
    }

    const calculateTotalPrice = (units, price) => {
        const unitsTypeNumber = Number(units)
        const priceTypeNumber = Number(price)

        return unitsTypeNumber * priceTypeNumber
    }

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
                    <p className="ShopItem-description">{props.description}</p>
                    <p className="price">{props.price}</p>

                    {props.displayAsCartItem &&
                        <div className="cart-information-wrapper">
                            <p>Units: {shopItem.units} </p>
                            <input
                                min={1}
                                type="number"
                                onChange={handleChangeUnits}
                                defaultValue={shopItem.units}
                            />
                            <p>Total price: {calculateTotalPrice(shopItem.units, props.price).toFixed(2)}</p>
                        </div>
                    }


                    <img className="favourite-star"
                        id={props.id}
                        onClick={props.handleClickIsFavourite}
                        src={props.isFavourite ? FilledStar : EmptyStar}
                    />
                    <button className="added-to-cart-button" id={props.id} onClick={props.handleClickAddToCart}>{props.addedToCart ? '✔ Added to Cart' : 'Add to Cart'}</button>
                </figcaption>
            </figure>
        </React.Fragment>
    )
}
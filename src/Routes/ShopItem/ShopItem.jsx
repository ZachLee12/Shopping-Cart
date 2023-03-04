import React from "react";

export default function ShopItem(props) {
    return (
        <React.Fragment>
            <figure className="ShopItem">
                <img className="ShopItem-image" src={props.image} alt="" />
                <figcaption>
                    <p className="ShopItem-name">{props.name}</p>
                    <p className="ShopItem-description">{props.description}</p>
                    <p className="price">19.99 CHF</p>
                    <span className="favourite-star"
                        id={props.id}
                        onClick={props.handleClickIsFavourite}
                    >{props.isFavourite ? '⭐' : '☆'}</span>
                    <button id={props.id} onClick={props.handleClickAddToCart}>{props.addedToCart ? '✔ Added to Cart' : 'Add to Cart'}</button>
                </figcaption>
            </figure>
        </React.Fragment>
    )
}
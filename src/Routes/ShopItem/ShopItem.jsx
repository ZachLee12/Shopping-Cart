import React from "react";
import FilledStar from '../../assets/images/filled-star.png'
import EmptyStar from '../../assets/images/empty-star.png'

export default function ShopItem(props) {
    return (
        <React.Fragment>
            <figure className="ShopItem">
                <img className="ShopItem-image" src={props.image} alt="" />
                <figcaption>
                    <p className="ShopItem-name">{props.name}</p>
                    <p className="ShopItem-description">{props.description}</p>
                    <p className="price">{props.price}</p>
                    <img className="favourite-star"
                        id={props.id}
                        onClick={props.handleClickIsFavourite}
                        src={props.isFavourite ? FilledStar : EmptyStar}
                    />
                    <button id={props.id} onClick={props.handleClickAddToCart}>{props.addedToCart ? '✔ Added to Cart' : 'Add to Cart'}</button>
                </figcaption>
            </figure>
        </React.Fragment>
    )
}
import React from "react";
import uniqid from 'uniqid';
import PlaceholderImage from '../../assets/images/placeholderImage.jpg'

export default function ShopItem(props) {
    // const initialState = {
    //     image: PlaceholderImage,
    //     name: 'Sample Item',
    //     id: uniqid(),
    //     addedToCart: false,
    //     isFavourite: false,
    //     description: 'This is a sample description about the ShopItem.'
    // }

    // const [item, setItem] = React.useState();


    return (
        <React.Fragment>
            <figure className="ShopItem">
                <img className="ShopItem-image" src={props.image} alt="" />
                <figcaption>
                    <p className="ShopItem-name">{props.name}</p>
                    <p className="ShopItem-description">{props.description}</p>
                    <p className="price">19.99 CHF</p>
                    <p className="favourite-star" >⭐ ☆</p>
                    <button onClick={() => setItem({
                        ...props,
                        addedToCart: !item.addedToCart
                    })}>{props.addedToCart ? '✔ Added to Cart' : 'Add to Cart'}</button>
                </figcaption>
            </figure>
        </React.Fragment>
    )
}
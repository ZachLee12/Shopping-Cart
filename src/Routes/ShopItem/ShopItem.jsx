import React from "react";
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
                    <span className="favourite-star"
                        id={props.id}
                        onClick={props.handleClickIsFavourite}
                    >{props.isFavourite ? '⭐' : '☆'}</span>
                    <button onClick={() => setItem({
                        ...props,
                        addedToCart: !props.addedToCart
                    })}>{props.addedToCart ? '✔ Added to Cart' : 'Add to Cart'}</button>
                </figcaption>
            </figure>
        </React.Fragment>
    )
}
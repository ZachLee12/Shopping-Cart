import React from "react";
import uniqid from 'uniqid';
import PlaceholderImage from '../../assets/images/placeholderImage.jpg'

export default function ShopItem(props) {
    const initialState = {
        image: PlaceholderImage,
        name: 'Sample Item',
        id: uniqid(),
        description: 'This is a sample description about the ShopItem.'
    }

    const [item, setItem] = React.useState(initialState);



    return (
        <React.Fragment>
            <figure className="ShopItem">
                <img className="ShopItem-image" src={PlaceholderImage} alt="" />
                <figcaption>
                    <p className="ShopItem-name">{item.name}</p>
                    <p className="ShopItem-description">{item.description}</p>
                </figcaption>
            </figure>

        </React.Fragment>
    )
}
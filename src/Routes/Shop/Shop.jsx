import React from "react";
import ShopItem from "../ShopItem/ShopItem";
import PlaceholderImage from '../../assets/images/placeholderImage.jpg'
import uniqid from 'uniqid';


export default function Shop() {

    const initialState = {
        itemList: [{
            image: PlaceholderImage,
            name: 'Sample Item',
            id: uniqid(),
            price: '19.99 CHF',
            addedToCart: false,
            isFavourite: false,
            description: 'This is a sample description about the ShopItem.'
        }],
    }

    const [shop, setShop] = React.useState(initialState)

    return (
        <div id='Shop'>
            <h1>Shop page</h1>


            {shop.itemList.map(item => {
                return (
                    <ShopItem />
                )
            })}
            {/* <ShopItem /> */}
        </div>
    )
}
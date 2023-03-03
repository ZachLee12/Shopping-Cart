import React from "react";
import ShopItem from "../ShopItem/ShopItem";
import PlaceholderImage from '../../assets/images/placeholderImage.jpg'
import uniqid from 'uniqid';


export default function Shop() {

    const initialState = {
        item: {
            image: PlaceholderImage,
            name: 'Sample Item',
            id: uniqid(),
            price: '19.99 CHF',
            addedToCart: false,
            isFavourite: false,
            description: 'This is a sample description about the ShopItem.'
        },
        itemList: [{
            image: PlaceholderImage,
            name: 'Sample Item',
            id: uniqid(),
            price: '19.99 CHF',
            addedToCart: false,
            isFavourite: false,
            description: 'This is a sample description about the ShopItem.'
        }, {
            image: PlaceholderImage,
            name: 'Sample Item',
            id: uniqid(),
            price: '19.99 CHF',
            addedToCart: false,
            isFavourite: false,
            description: 'This is a sample description about the ShopItem.'
        }]
    }


    const [shop, setShop] = React.useState(initialState)

    const handleClickIsFavourite = (e) => {
        let itemToChangeIndex = shop.itemList.findIndex(item => item.id === e.target.id)
        let copyList = [...shop.itemList]
        copyList[itemToChangeIndex] = toggleIsFavourite(copyList[itemToChangeIndex])

        setShop({
            ...shop,
            itemList: copyList
        })
    }

    const toggleIsFavourite = (item) => {
        return Object.assign(item, {
            isFavourite: !item.isFavourite
        })
    }

    return (
        <div id='Shop'>
            <h1>Shop page</h1>


            {shop.itemList.map(item => {
                return (
                    <ShopItem
                        image={item.image}
                        key={item.id}
                        id={item.id}
                        price={item.price}
                        addedToCard={item.addedToCart}
                        isFavourite={item.isFavourite}
                        description={item.description}
                        handleClickIsFavourite={handleClickIsFavourite}
                    />
                )
            })}
            {/* <ShopItem /> */}
        </div>
    )
}
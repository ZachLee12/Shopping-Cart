import React from "react";
import ShopItem from "../ShopItem/ShopItem";
import PlaceholderImage from '../../assets/images/placeholderImage.jpg'
import Clothes1 from '../../assets/images/clothes1.jpg'
import Clothes2 from '../../assets/images/clothes2.webp'
import Clothes3 from '../../assets/images/clothes3.webp'
import Clothes4 from '../../assets/images/clothes4.jpg'
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
        }, {
            image: Clothes1,
            name: 'Sample Item',
            id: uniqid(),
            price: '10.20 CHF',
            addedToCart: false,
            isFavourite: false,
            description: 'This is a sample description about the ShopItem.'
        },
        {
            image: Clothes2,
            name: 'Sample Item',
            id: uniqid(),
            price: '12.34 CHF',
            addedToCart: false,
            isFavourite: false,
            description: 'This is a sample description about the ShopItem.'
        },
        {
            image: Clothes3,
            name: 'Sample Item',
            id: uniqid(),
            price: '12.34 CHF',
            addedToCart: false,
            isFavourite: false,
            description: 'This is a sample description about the ShopItem.'
        }, {
            image: Clothes3,
            name: 'Sample Item',
            id: uniqid(),
            price: '12.34 CHF',
            addedToCart: false,
            isFavourite: false,
            description: 'This is a sample description about the ShopItem.'
        }, {
            image: Clothes4,
            name: 'Sample Item',
            id: uniqid(),
            price: '12.34 CHF',
            addedToCart: false,
            isFavourite: false,
            description: 'This is a sample description about the ShopItem.'
        },]
    }


    const [shop, setShop] = React.useState(initialState)

    const handleClickIsFavourite = (e) => {
        const toggleIsFavourite = (item) => {
            return Object.assign(item, {
                isFavourite: !item.isFavourite
            })
        }

        let itemToChangeIndex = shop.itemList.findIndex(item => item.id === e.target.id)
        let copyList = [...shop.itemList]
        copyList[itemToChangeIndex] = toggleIsFavourite(copyList[itemToChangeIndex])

        setShop({
            ...shop,
            itemList: copyList
        })

    }

    const handleClickAddToCart = (e) => {
        const toggleAddToCart = (item) => {
            return Object.assign(item, {
                addedToCart: !item.addedToCart
            })
        }

        let itemToChangeIndex = shop.itemList.findIndex(item => item.id === e.target.id)
        let copyList = [...shop.itemList]
        copyList[itemToChangeIndex] = toggleAddToCart(copyList[itemToChangeIndex])

        setShop({
            ...shop,
            itemList: copyList
        })
    }

    return (
        <div id='Shop'>
            <h1>Shop page</h1>


            <div className="shop-items-wrapper">
                {shop.itemList.map(item => {
                    return (
                        <ShopItem
                            image={item.image}
                            key={item.id}
                            id={item.id}
                            price={item.price}
                            addedToCart={item.addedToCart}
                            isFavourite={item.isFavourite}
                            description={item.description}
                            handleClickIsFavourite={handleClickIsFavourite}
                            handleClickAddToCart={handleClickAddToCart}
                        />
                    )
                })}
            </div>

        </div>
    )
}
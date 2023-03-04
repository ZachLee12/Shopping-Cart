import React, { useEffect } from "react";
import ShopItem from "../ShopItem/ShopItem";
import {
    itemList as fullItemList,
    searchItems
} from "../../shopItems";

import { Form, useLoaderData } from 'react-router-dom'

export function loader({ request }) {
    const url = new URL(request.url)
    let q = url.searchParams.get('q')

    //'' an empty string will cause an error
    if (q === '' || !q) {
        q = ' '
    }
    return { searchedItemList: searchItems(q) }
}

export default function Shop() {
    //note that due to SHALLOW COPYING with filter(),
    //all itemLists here are IN SYNC with their states
    //this means that searchedItemList, fullItemList and initialState all have the same reference point
    const { searchedItemList } = useLoaderData();

    const initialState = {
        itemList: fullItemList
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

    useEffect(() => {
        // console.log(searchedItemList)

        return (
            () => {
                // console.log('UNMOUNT')
            }
        )
    })

    return (
        <div id='Shop'>
            <h1>Shop page</h1>
            <Form id='search-form'>
                <label className='search-bar-label' htmlFor="search-bar">
                    Search
                    <input
                        autoComplete="off"
                        type="search"
                        id='search-bar'
                        name='q'
                    />
                </label>
            </Form>


            <div className="shop-items-wrapper">
                {searchedItemList.length > 0
                    ? searchedItemList.map(item => {
                        return (
                            <ShopItem
                                image={item.image}
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                addedToCart={item.addedToCart}
                                isFavourite={item.isFavourite}
                                description={item.description}
                                handleClickIsFavourite={handleClickIsFavourite}
                                handleClickAddToCart={handleClickAddToCart}
                            />
                        )
                    }
                    )
                    : <h1>No Items were found.</h1>}
            </div>

        </div>
    )
}
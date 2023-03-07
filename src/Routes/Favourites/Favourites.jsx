import { itemList as fullItemList } from "../../shopItems";
import ShopItem from "../../Components/ShopItem/ShopItem";
import React, { useEffect } from "react";

export default function Favourites() {
    const searchFavourites = (() => {
        return fullItemList.filter(item => item.isFavourite)
    })();

    const [favourite, setFavourite] = React.useState({
        itemList: searchFavourites
    });

    const handleClickIsFavourite = (e) => {
        const toggleIsFavourite = (item) => {
            return Object.assign(item, {
                isFavourite: !item.isFavourite
            })
        }

        let itemToChangeIndex = favourite.itemList.findIndex(item => item.id === e.target.id)
        let copyList = [...favourite.itemList]
        copyList[itemToChangeIndex] = toggleIsFavourite(copyList[itemToChangeIndex])

        setFavourite({
            ...favourite.itemList,
            itemList: copyList
        })
    }

    const handleClickAddToCart = (e) => {
        const toggleAddToCart = (item) => {
            return Object.assign(item, {
                addedToCart: !item.addedToCart
            })
        }

        let itemToChangeIndex = favourite.itemList.findIndex(item => item.id === e.target.id)
        let copyList = [...favourite.itemList]
        copyList[itemToChangeIndex] = toggleAddToCart(copyList[itemToChangeIndex])

        setFavourite({
            ...favourite.itemList,
            itemList: copyList
        })
    }

    useEffect(() => {
        // console.log('COMPONENT MOUNTED')
        // console.log(favourite)

        return () => {
            // console.log('COMPONENT UNMOUNTED')
            // console.log(favourite)
        }

    }, [])

    return (
        <div id="Favourites">
            <h1>Favourite</h1>
            <div className="favourites-wrapper">
                {searchFavourites.map(item => {
                    return (
                        <ShopItem
                            image={item.image}
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            units={item.units}
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
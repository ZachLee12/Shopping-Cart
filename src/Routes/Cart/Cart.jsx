import { itemList as fullItemList } from "../../shopItems"
import ShopItem from "../../Components/ShopItem/ShopItem"
import React, { useEffect } from 'react';
import Checkout from "../../Components/Checkout/Checkout";

export default function Cart() {
    const searchCart = (() => {
        return fullItemList.filter(item => item.addedToCart)
    })();

    const [cart, setCart] = React.useState({
        itemList: searchCart,
        renderCheckout: false,
    });

    const handleClickIsFavourite = (e) => {
        const toggleIsFavourite = (item) => {
            return Object.assign(item, {
                isFavourite: !item.isFavourite,
            })
        }

        let itemToChangeIndex = cart.itemList.findIndex(item => item.id === e.target.id)
        let copyList = [...cart.itemList]
        copyList[itemToChangeIndex] = toggleIsFavourite(copyList[itemToChangeIndex])

        setCart({
            ...cart,
            itemList: copyList
        })
    }

    const handleClickAddToCart = (e) => {
        const toggleAddToCart = (item) => {
            return Object.assign(item, {
                addedToCart: !item.addedToCart
            })
        }

        let itemToChangeIndex = cart.itemList.findIndex(item => item.id === e.target.id)
        let copyList = [...cart.itemList]
        copyList[itemToChangeIndex] = toggleAddToCart(copyList[itemToChangeIndex])

        setCart({
            ...cart.itemList,
            itemList: copyList
        })
    }

    const handleClickMountCheckout = (e) => {
        setCart({
            ...cart,
            renderCheckout: true,
        })
    }

    const handleClickUnmountCheckout = (e) => {
        setCart({
            ...cart,
            renderCheckout: false,
        })
    }

    useEffect(() => {
        let activatedCartDisplayList = [...cart.itemList]
        activatedCartDisplayList.forEach(item => {
            item.displayAsCartItem = true;
        })

        setCart({
            ...cart,
            itemList: activatedCartDisplayList,
        })


        return () => {
            let deactivatedCartDisplayList = [...cart.itemList]
            deactivatedCartDisplayList.forEach(item => {
                item.displayAsCartItem = false;
            })

            setCart({
                ...cart,
                itemList: deactivatedCartDisplayList,
            })
        }
    }, [])


    return (
        <div id='Cart'>
            <h1>Cart</h1>
            <div className="cart-wrapper">
                {searchCart.map(item => {
                    return (
                        <ShopItem
                            image={item.image}
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            units={item.units}
                            displayAsCartItem={item.displayAsCartItem}
                            addedToCart={item.addedToCart}
                            isFavourite={item.isFavourite}
                            description={item.description}
                            handleClickIsFavourite={handleClickIsFavourite}
                            handleClickAddToCart={handleClickAddToCart}
                        />
                    )
                })}
            </div>


            <button
                onClick={handleClickMountCheckout}
                className="checkout-button">
                Checkout
            </button>

            <Checkout
                itemList={cart.itemList}
                renderCheckout={cart.renderCheckout}
                handleClickUnmountCheckout={handleClickUnmountCheckout}
            />
        </div>
    )
}
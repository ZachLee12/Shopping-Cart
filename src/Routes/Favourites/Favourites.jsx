import { itemList as fullItemList } from "../../shopItems";
import ShopItem from "../../Components/ShopItem/ShopItem";
import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowLeft from '../../assets/images/arrow-left.png'

export default function Favourites() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    }

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

    return (
        <div id="Favourites">
            <button onClick={goBack} className="go-back-btn-wrapper">
                <img src={ArrowLeft} />
                <p className="back-to-shop-title">Back To Shop</p>
            </button>
            <p className="favourites-title">Favourites</p>
            <p className="favourites-title-caption"><i>All your favourite styles.</i></p>
            <div className="favourites-wrapper">
                {favourite.itemList.length > 0 && searchFavourites.map(item => {
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

                {/* depends on searchFavourites here to render it even before favourite.itemList updated */}
                {searchFavourites.length === 0 &&
                    <div className="no-favourites-wrapper">
                        <p className="no-favourites-title">No Favourites. ☹️</p>
                    </div>
                }
            </div>
        </div>
    )
}
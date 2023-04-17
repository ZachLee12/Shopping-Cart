import './_Features.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { itemList as fullItemList } from '../../shopItems'
import { useEffect, useState } from 'react'
import ShopItem from '../../Components/ShopItem/ShopItem'
import ArrowLeft from '../../assets/images/arrow-left.png'

export default function Features() {
    const location = useLocation()
    const { featureType } = location.state
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    }

    const searchFeature = (() => {
        return fullItemList.filter(item => item.features.includes(featureType))
    })();
    
    const initialState = {
        itemList: searchFeature
    }

    const [feature,setFeature] = useState(initialState)

    const getDescription = () => {
        switch (featureType) {
            case 'trendy':
                return 'Discover the latest hiking trends.'

            case 'mountain-meister':
                return 'Up your level, set your game.'

            case 'adventurous':
                return 'An adventure of a lifetime.'
        }
    }

    const getFeatureItems = () => {
        return fullItemList.filter(item => item.features.includes(featureType))
    }

    const handleClickIsFavourite = (e) => {
        const toggleIsFavourite = (item) => {
            return Object.assign(item, {
                isFavourite: !item.isFavourite
            })
        }

        let itemToChangeIndex = feature.itemList.findIndex(item => item.id === e.target.id)
        let copyList = [...feature.itemList]
        copyList[itemToChangeIndex] = toggleIsFavourite(copyList[itemToChangeIndex])

        setFeature({
            ...feature.itemList,
            itemList: copyList
        })
    }

    const handleClickAddToCart = (e) => {
        const toggleAddToCart = (item) => {
            return Object.assign(item, {
                addedToCart: !item.addedToCart
            })
        }

        let itemToChangeIndex = feature.itemList.findIndex(item => item.id === e.target.id)
        let copyList = [...feature.itemList]
        copyList[itemToChangeIndex] = toggleAddToCart(copyList[itemToChangeIndex])

        setFeature({
            ...feature.itemList,
            itemList: copyList
        })

    }


    return (
        <div id='Features'>
            <button onClick={goBack} className="go-back-btn-wrapper">
                <img src={ArrowLeft} alt="" />
                <p className="back-to-shop-title">Back To Shop</p>
            </button>
            <p className="feature-title">{featureType[0].toUpperCase() + featureType.slice(1)}</p>
            <p className="feature-title-caption">
                <i>
                    {getDescription()}
                </i>
            </p>
            <div className="feature-items-wrapper">
                {getFeatureItems().map(item => {
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
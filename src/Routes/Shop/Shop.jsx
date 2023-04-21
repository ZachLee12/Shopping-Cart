import React from "react";
import ShopItem from "../../Components/ShopItem/ShopItem";
import HikingInkArt from '../../assets/images/hiking-ink-art.png'
import { itemList as fullItemList, searchItems } from "../../shopItems";
import uniqid from 'uniqid';
import { Link } from "react-router-dom";
import { Form, useLoaderData, useSubmit } from 'react-router-dom'

export function loader({ request }) {
    const url = new URL(request.url)
    let q = url.searchParams.get('q')

    //'' an empty string will cause an error
    if (q === '' || !q) {
        q = ' '
    }
    return { searchedItemList: searchItems(q), q }
}

export default function Shop(props) {
    const submit = useSubmit();
    //note that due to SHALLOW COPYING with filter(),
    //all itemLists here are IN SYNC with their states
    //this means that searchedItemList, fullItemList and initialState all have the same reference point
    const { searchedItemList, q } = useLoaderData();

    const initialState = {
        showSideBar: false,
        itemList: fullItemList,
        links: {
            favourites: {
                name: 'Favourites',
                id: uniqid(),
                isActive: false
            },
            trendy: {
                name: 'Trendy',
                id: uniqid(),
                isActive: false
            },
            adventurous: {
                name: `Adventurous`,
                id: uniqid(),
                isActive: false
            },
            mountainMeister: {
                name: 'Mountain-Meister',
                id: uniqid(),
                isActive: false
            }
        }
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

    const toggleSideBar = (e) => {
        setShop({
            ...shop,
            showSideBar: !shop.showSideBar
        })
    }

    return (
        <div id='Shop'>
            <div className="sidebar-wrapper">
                <div className={`sidebar ${shop.showSideBar ? 'show-sidebar' : ''}`}>
                    <img src={HikingInkArt} className="hiking-ink-art-image" />
                    <div className="link-wrapper">
                        <Link
                            to={'/favourites'}
                            className='sidebar-link'>
                            <span
                                id={shop.links.favourites.id}
                            >{shop.links.favourites.name}</span>
                        </Link>
                        <div className="sidebar-link-horizontal-line"></div>
                    </div>
                    <div className="link-wrapper">
                        <Link
                            state={{ featureType: 'trendy' }}
                            to={'/feature/trendy'}
                            className='sidebar-link'>
                            <span
                                id={shop.links.trendy.id}
                            >{shop.links.trendy.name}</span>
                        </Link>
                        <div className={`sidebar-link-horizontal-line ${shop.links.trendy.isActive ? 'active-sidebar-horizontal-line' : ''}`}></div>
                    </div>
                    <div className="link-wrapper">
                        <Link
                            state={{ featureType: 'adventurous' }}
                            to={'/feature/adventurous'}
                            id={shop.links.adventurous.id}
                            className='sidebar-link'>
                            <span
                                id={shop.links.adventurous.id}
                            >{shop.links.adventurous.name}</span>
                        </Link>
                        <div className="sidebar-link-horizontal-line"></div>
                    </div>
                    <div className="link-wrapper">
                        <Link
                            state={{ featureType: 'mountain-meister' }}
                            to={'/feature/mountain-meister'}
                            id={shop.links.mountainMeister.id}
                            className='sidebar-link'>
                            <span
                                id={shop.links.mountainMeister.id}
                            >{shop.links.mountainMeister.name}</span>
                        </Link>
                        <div className="sidebar-link-horizontal-line"></div>
                    </div>
                </div>
                {/* END OF SIDE BAR */}

                <div
                    onClick={toggleSideBar}
                    className="menu-panel"
                    alt="menu-icon"
                >
                    <div className="show-menu-wrapper">
                        <p>{shop.showSideBar ? 'Hide' : 'Menu'}</p>
                    </div>
                </div>
            </div>

            <div className="shop-content">
                <p className="shop-page-title">Find your gear.</p>

                <Form className='search-form'>
                    <input
                        placeholder="search..."
                        autoComplete="off"
                        type="search"
                        id='search-bar'
                        name='q'
                        onChange={(e) => {
                            const isFirstSearch = q == null;
                            submit(e.currentTarget.form, {
                                replace: !isFirstSearch
                            })
                        }}
                    />
                    <div className="horizontal-line"></div>
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
                                    units={item.units}
                                    addedToCart={item.addedToCart}
                                    isFavourite={item.isFavourite}
                                    description={item.description}
                                    handleClickIsFavourite={handleClickIsFavourite}
                                    handleClickAddToCart={handleClickAddToCart}
                                />
                            )
                        }
                        )
                        : <div>
                            <h1>No Items were found.</h1>
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}
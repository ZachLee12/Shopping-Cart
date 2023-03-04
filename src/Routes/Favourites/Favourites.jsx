import { itemList } from "../../shopItems";
import ShopItem from "../ShopItem/ShopItem";

export default function Favourites() {
    const searchFavourites = (() => {
        return itemList.filter(item => item.isFavourite)
    })();


    return (
        <div id="Favourites">
            <h1>Favourite</h1>
            {searchFavourites.map(item => {
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
                    />
                )
            })}
        </div>
    )
}
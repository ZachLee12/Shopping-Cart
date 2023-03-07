import PlaceholderImage from './assets/images/placeholderImage.jpg'
import Clothes1 from './assets/images/clothes1.jpg'
import Clothes2 from './assets/images/clothes2.webp'
import Clothes3 from './assets/images/clothes3.webp'
import Clothes4 from './assets/images/clothes4.jpg'
import uniqid from 'uniqid';

export const itemList = [{
    image: PlaceholderImage,
    name: 'Nice Image',
    id: uniqid(),
    price: 19.99,
    displayAsCartItem: false,
    units: 1,
    addedToCart: true,
    isFavourite: true,
    description: 'This is a sample description about the ShopItem.'
}, {
    image: Clothes1,
    name: 'Good clothes',
    id: uniqid(),
    price: 10.20,
    displayAsCartItem: false,
    units: 1,
    addedToCart: false,
    isFavourite: false,
    description: 'This is a sample description about the ShopItem.'
},
{
    image: Clothes2,
    name: 'Amazing Item',
    id: uniqid(),
    price: 12.34,
    displayAsCartItem: false,
    units: 1,
    addedToCart: false,
    isFavourite: false,
    description: 'This is a sample description about the ShopItem.'
},
{
    image: Clothes3,
    name: 'Sample Clothes',
    id: uniqid(),
    price: 12.34,
    displayAsCartItem: false,
    units: 1,
    addedToCart: false,
    isFavourite: false,
    description: 'This is a sample description about the ShopItem.'
}, {
    image: Clothes3,
    name: 'Clothes for sale',
    id: uniqid(),
    price: 12.34,
    displayAsCartItem: false,
    units: 1,
    addedToCart: false,
    isFavourite: true,
    description: 'This is a sample description about the ShopItem.'
}, {
    image: Clothes4,
    name: 'Some random clothes',
    id: uniqid(),
    price: 16.99,
    displayAsCartItem: false,
    units: 1,
    addedToCart: false,
    isFavourite: false,
    description: 'This is a sample description about the ShopItem.'
}, {
    image: Clothes3,
    name: 'Clothes with more clothes',
    id: uniqid(),
    price: 12.34,
    displayAsCartItem: false,
    units: 1,
    addedToCart: false,
    isFavourite: false,
    description: 'This is a sample description about the ShopItem.'
},]

export function searchItems(partialName) {
    //this filters falsy inputs
    if (partialName) {
        return itemList.filter(item => item.name.toLowerCase().includes(partialName.toLowerCase()))
    }
} 
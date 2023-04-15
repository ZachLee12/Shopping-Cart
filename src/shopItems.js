import PlaceholderImage from './assets/images/placeholderImage.jpg'
import Clothes1 from './assets/images/clothes1.jpg'
import Clothes2 from './assets/images/clothes2.webp'
import Clothes3 from './assets/images/clothes3.webp'
import Clothes4 from './assets/images/clothes4.jpg'
import uniqid from 'uniqid';

// `price` here is in string, because otherwise 10.00 will mount as 10
export const itemList = [{
    image: PlaceholderImage,
    name: 'Nice Image',
    id: uniqid(),
    price: '10.00',
    displayAsCartItem: false,
    units: 1,
    totalPrice: 10.00,
    addedToCart: true,
    isFavourite: true,
    features: ['trendy', 'mountain-meister'],
    description: 'This is a sample description about the ShopItem.'
}, {
    image: Clothes1,
    name: 'Good clothes',
    id: uniqid(),
    price: '10.20',
    displayAsCartItem: false,
    units: 1,
    totalPrice: 10.20,
    addedToCart: true,
    isFavourite: false,
    features: ['trendy', 'adventurous', 'mountain-meister'],
    description: 'This is a sample description about the ShopItem.'
},
{
    image: Clothes2,
    name: 'Amazing Item',
    id: uniqid(),
    price: '12.34',
    displayAsCartItem: false,
    units: 1,
    totalPrice: 12.34,
    addedToCart: false,
    isFavourite: false,
    features: ['', 'mountain-meister'],
    description: 'This is a sample description about the ShopItem.'
},
{
    image: Clothes3,
    name: 'Sample Clothes',
    id: uniqid(),
    price: '12.34',
    displayAsCartItem: false,
    units: 1,
    totalPrice: 12.34,
    addedToCart: false,
    isFavourite: false,
    features: ['trendy', 'adventurous', 'mountain-meister'],
    description: 'This is a sample description about the ShopItem.'
}, {
    image: Clothes3,
    name: 'Clothes for sale',
    id: uniqid(),
    price: '12.34',
    displayAsCartItem: false,
    units: 1,
    totalPrice: 12.34,
    addedToCart: false,
    isFavourite: true,
    features: ['', 'mountain-meister'],
    description: 'This is a sample description about the ShopItem.'
}, {
    image: Clothes4,
    name: 'Some random clothes',
    id: uniqid(),
    price: '16.99',
    displayAsCartItem: false,
    units: 1,
    totalPrice: 16.99,
    addedToCart: false,
    isFavourite: false,
    features: ['', 'mountain-meister'],
    description: 'This is a sample description about the ShopItem.'
}, {
    image: Clothes3,
    name: 'Clothes with more clothes',
    id: uniqid(),
    price: '12.34',
    totalPrice: 12.34,
    displayAsCartItem: false,
    units: 1,
    addedToCart: false,
    isFavourite: false,
    features: ['', 'mountain-meister'],
    description: 'This is a sample description about the ShopItem.'
},]

export function searchItems(partialName) {
    //this filters falsy inputs
    if (partialName) {
        return itemList.filter(item => item.name.toLowerCase().includes(partialName.toLowerCase()))
    }
} 
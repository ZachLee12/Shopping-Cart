import HikingGearSet from './assets/images/shopItem1-backpack.jpg'
import Backpack2 from './assets/images/shopItem2-backpack.jpg'
import Backpack3 from './assets/images/shopItem3-backpack.webp'
import HikingSticks from './assets/images/shopItem4-sticks.webp'
import HikingSticks2 from './assets/images/shopItem5-sticks.jpeg'
import HikingSticks3 from './assets/images/shopItem6-sticks.jpeg'
import Shoe1 from './assets/images/shopItem7-shoe.jpg'
import Thermos1 from './assets/images/shopItem8-thermos.jpg'
import Bottle1 from './assets/images/shopItem9-bottle.jpg'
import Shoe2 from './assets/images/shopItem10-shoes.png'
import Jacket1 from './assets/images/shopItem12-women-attire.webp'
import Jacket2 from './assets/images/shopItem11-jacket.webp'
import Jacket3 from './assets/images/shopItem13-jacket.jpg'
import uniqid from 'uniqid';

// `price` here is in string, because otherwise 10.00 will mount as 10
export const itemList = [{
    image: HikingGearSet,
    name: 'Hiking Gear Set',
    id: uniqid(),
    price: 150,
    displayAsCartItem: false,
    units: 1,
    totalPrice: 150,
    addedToCart: false,
    isFavourite: false,
    features: ['trendy', 'mountain-meister'],
}, {
    image: Backpack2,
    name: '100L Backpack',
    id: uniqid(),
    price: 70,
    displayAsCartItem: false,
    units: 1,
    totalPrice: 70,
    addedToCart: false,
    isFavourite: false,
    features: ['trendy', 'adventurous',],
},
{
    image: Backpack3,
    name: '60L Backpack',
    id: uniqid(),
    price: 50,
    displayAsCartItem: false,
    units: 1,
    totalPrice: 50,
    addedToCart: false,
    isFavourite: false,
    features: ['mountain-meister'],
},
{
    image: HikingSticks,
    name: 'Ultra Compact Hiking Sticks',
    id: uniqid(),
    price: 45,
    displayAsCartItem: false,
    units: 1,
    totalPrice: 45,
    addedToCart: false,
    isFavourite: false,
    features: ['trendy', 'adventurous', 'mountain-meister'],
}, {
    image: HikingSticks2,
    name: 'Black Diamond Hiking Sticks',
    id: uniqid(),
    price: 55,
    displayAsCartItem: false,
    units: 1,
    totalPrice: 55,
    addedToCart: false,
    isFavourite: false,
    features: ['adventurous'],
}, {
    image: HikingSticks3,
    name: 'Ultra Strong Hiking Sticks',
    id: uniqid(),
    price: 80,
    displayAsCartItem: false,
    units: 1,
    totalPrice: 80,
    addedToCart: false,
    isFavourite: false,
    features: ['trendy', 'mountain-meister'],
}, {
    image: Shoe1,
    name: 'Waterproof Hiking Boots',
    id: uniqid(),
    price: 120,
    totalPrice: 120,
    displayAsCartItem: false,
    units: 1,
    addedToCart: false,
    isFavourite: false,
    features: ['mountain-meister'],
},
{
    image: Thermos1,
    name: `3L Thermos`,
    id: uniqid(),
    price: 60,
    totalPrice: 60,
    displayAsCartItem: false,
    units: 1,
    addedToCart: false,
    isFavourite: false,
    features: ['trendy'],
},

{
    image: Bottle1,
    name: `5L Bottle`,
    id: uniqid(),
    price: 70,
    totalPrice: 70,
    displayAsCartItem: false,
    units: 1,
    addedToCart: false,
    isFavourite: false,
    features: ['mountain-meister', 'adventurous'],
},

{
    image: Shoe2,
    name: `Ultra Compact Hiking Boots`,
    id: uniqid(),
    price: 70,
    totalPrice: 70,
    displayAsCartItem: false,
    units: 1,
    addedToCart: false,
    isFavourite: false,
    features: ['trendy'],
},

{
    image: Jacket1,
    name: `Waterproof Windbreaker`,
    id: uniqid(),
    price: 170,
    totalPrice: 170,
    displayAsCartItem: false,
    units: 1,
    addedToCart: false,
    isFavourite: false,
    features: ['mountain-meister'],
},

{
    image: Jacket2,
    name: `Winter Hiking Jacket`,
    id: uniqid(),
    price: 210,
    totalPrice: 210,
    displayAsCartItem: false,
    units: 1,
    addedToCart: false,
    isFavourite: false,
    features: ['trendy', 'adventurous'],
},

{
    image: Jacket3,
    name: `Compact Hiking Jacket`,
    id: uniqid(),
    price: 120,
    totalPrice: 120,
    displayAsCartItem: false,
    units: 1,
    addedToCart: false,
    isFavourite: false,
    features: ['trendy', 'mountain-meister'],
},

]

export function searchItems(partialName) {
    //this filters falsy inputs
    if (partialName) {
        return itemList.filter(item => item.name.toLowerCase().includes(partialName.toLowerCase()))
    }
} 
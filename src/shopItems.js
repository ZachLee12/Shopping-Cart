import PlaceholderImage from './assets/images/placeholderImage.jpg'
import HikingGearSet from './assets/images/shopItem1-backpack.jpg'
import Backpack2 from './assets/images/shopItem2-backpack.jpg'
import Backpack3 from './assets/images/shopItem3-backpack.webp'
import HikingSticks from './assets/images/shopItem4-sticks.webp'
import HikingSticks2 from './assets/images/shopItem5-sticks.jpeg'
import HikingSticks3 from './assets/images/shopItem6-sticks.jpeg'
import MenAttire1 from './assets/images/shopItem7-men-attire.jpg'
import MenAttire2 from './assets/images/shopItem8-men-attire.jpg'
import MenAttire3 from './assets/images/shopItem9-men-attire.jpg'
import Shoe from './assets/images/shopItem10-shoes.png'
import WomenAttire1 from './assets/images/shopItem11-women-attire.jpeg'
import WomenAttire2 from './assets/images/shopItem12-women-attire.webp'
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
    addedToCart: true,
    isFavourite: true,
    features: ['trendy', 'mountain-meister'],
}, {
    image: Backpack2,
    name: '100L Backpack',
    id: uniqid(),
    price: 70,
    displayAsCartItem: false,
    units: 1,
    totalPrice: 70,
    addedToCart: true,
    isFavourite: false,
    features: ['trendy', 'adventurous', 'mountain-meister'],
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
    isFavourite: true,
    features: ['', 'mountain-meister'],
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
    features: ['', 'mountain-meister'],
}, {
    image: MenAttire1,
    name: 'Waterproof Windbreaker',
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
    image: MenAttire2,
    name: `Men's Full Hiking Set`,
    id: uniqid(),
    price: 250,
    totalPrice: 250,
    displayAsCartItem: false,
    units: 1,
    addedToCart: false,
    isFavourite: false,
    features: ['mountain-meister'],
},

{
    image: MenAttire3,
    name: `Men's Summer Hiking Set`,
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
    image: Shoe,
    name: `Ultra Compact Hiking Boots`,
    id: uniqid(),
    price: 70,
    totalPrice: 70,
    displayAsCartItem: false,
    units: 1,
    addedToCart: false,
    isFavourite: false,
    features: ['mountain-meister'],
},

{
    image: WomenAttire1,
    name: `Women's Full Hiking Set`,
    id: uniqid(),
    price: 70,
    totalPrice: 70,
    displayAsCartItem: false,
    units: 1,
    addedToCart: false,
    isFavourite: false,
    features: ['mountain-meister'],
},

{
    image: WomenAttire2,
    name: `Women's Summer Hiking Set`,
    id: uniqid(),
    price: 70,
    totalPrice: 70,
    displayAsCartItem: false,
    units: 1,
    addedToCart: false,
    isFavourite: false,
    features: ['mountain-meister'],
},

]

export function searchItems(partialName) {
    //this filters falsy inputs
    if (partialName) {
        return itemList.filter(item => item.name.toLowerCase().includes(partialName.toLowerCase()))
    }
} 
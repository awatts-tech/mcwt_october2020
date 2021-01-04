"use strict";
let mountains = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 },
];
function findNameOfTheTallestMountain(mountains) {
    let currentTallestHeight = 0;
    let tallestMountainName = '';
    mountains.forEach(mountain => {
        if (mountain.height > currentTallestHeight) {
            currentTallestHeight = mountain.height;
            tallestMountainName = mountain.name;
        }
    });
    return tallestMountainName;
}
let nameOfTallestMountain = findNameOfTheTallestMountain(mountains);
console.log(nameOfTallestMountain);
let products = [
    { name: 'apples', price: 5 },
    { name: 'oranges', price: 5 },
    { name: 'mangos', price: 5 },
];
function calcAverageProductPrice(products) {
    let total = 0;
    for (let product of products) {
        total += product.price;
    }
    return total / products.length;
}
let averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);
let inventory = [
    { product: { name: 'motor', price: 10 }, quantity: 10 },
    { product: { name: 'sensor', price: 12.5 }, quantity: 4 },
    { product: { name: 'LED', price: 1 }, quantity: 20 },
];
function calcInventoryValue(inventoryArray) {
    let value = 0;
    inventoryArray.forEach(item => {
        value += item.product.price * item.quantity;
    });
    return value;
}
let inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);

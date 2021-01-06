interface Mountain {
	name: string;
	height: number;
}

let mountains: Mountain[] = [
	{ name: 'Kilimanjaro', height: 19341 },
	{ name: 'Everest', height: 29029 },
	{ name: 'Denali', height: 20310 },
];

function findNameOfTheTallestMountain(mountains: Mountain[]): string {
	let currentTallestHeight: number = 0;
	let tallestMountainName: string = '';
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

interface Product {
	name: string;
	price: number;
}

let products: Product[] = [
	{ name: 'apples', price: 5 },
	{ name: 'oranges', price: 5 },
	{ name: 'mangos', price: 5 },
];

function calcAverageProductPrice(products: Product[]): number {
	let total: number = 0;
	
	for (let product of products) {
		total += product.price;
	}

	return total / products.length;
}

let averagePrice: number = calcAverageProductPrice(products);

console.log(averagePrice);

interface InventoryItem {
	product: Product
	quantity: number;
}

let inventory: InventoryItem[] = [
	{ product: { name: 'motor', price: 10 }, quantity: 10 },
	{ product: { name: 'sensor', price: 12.5 }, quantity: 4 },
	{ product: { name: 'LED', price: 1 }, quantity: 20 },
];

function calcInventoryValue(inventoryArray: InventoryItem[]): number {
	let value = 0;

	for (let item of inventoryArray) {
		value += item.product.price * item.quantity;
	}

	return value;
}

let inventoryValue = calcInventoryValue(inventory);

console.log(inventoryValue);

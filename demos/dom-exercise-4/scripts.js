let totalValue = 0;
document.getElementById('submit').addEventListener('click', makeMoney);

const values = {
	penny: 0.01,
	nickel: 0.05,
	dime: 0.1,
	quarter: 0.25,
};

function makeMoney(event) {
	event.preventDefault();
	let number = document.getElementById('number').value;
	let coin = document.getElementById('coin-dropdown').value;

	for (number; number > 0; number--) {
		let newCoin = document.createElement('div');
		newCoin.addEventListener('click', removeCoin);

		// Set data-* attribute
		newCoin.dataset.value = coin;

		newCoin.classList.add('coin');
		newCoin.classList.add(coin);

		const toAdd = values[coin];
		newCoin.innerHTML = (toAdd * 100) + 'c';
		totalValue += toAdd;

		document.querySelector('.coins').appendChild(newCoin);

		setTotal();
	}
}

function setTotal() {
	// Ensure total is positive 0
	if (totalValue === -0) {
		totalValue = 0;
	}
	const total = document.getElementById('total-value');
	total.innerHTML = `Total Value: $ ${totalValue.toFixed(2)}`;
}

function removeCoin(event) {
	const value = event.target.dataset.value || 0;

	toRemove = values[value];
	totalValue -= toRemove;
	setTotal();

	event.target.remove();
}

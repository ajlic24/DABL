let range = document.getElementById('tipRange');
let percent = document.getElementById('showPerc');
let bill = document.getElementById('bill');
let tipAmountSide = document.getElementById('tipAmountSide');
let totalResult = document.getElementById('totalResult');


range.addEventListener('input', slideMe);


function slideMe() {
	percent.textContent = `${parseInt(range.value)}%`;
	let tipAmount = bill.value * (range.value / 100);
	tipAmountSide.textContent = `$${tipAmount}`;
	let totalBill = parseInt(bill.value) + tipAmount;
	totalResult.textContent = `$${totalBill}`;

}
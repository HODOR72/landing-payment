// MODAL
const modal = document.getElementById('myModal')

const btn = document.getElementById('myBtn')

const span = document.getElementsByClassName('close')[0]

btn.onclick = function () {
	modal.style.display = 'block'
}

span.onclick = function () {
	modal.style.display = 'none'
}

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none'
	}
}
// MODAL END

const backUrl = 'http://localhost:3000'

const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const monthsElement = document.getElementById('months')
const priceElement = document.querySelector('.price')

let months = 1
let price = 1490

function updateMonthsAndPrice() {
	monthsElement.textContent = months + ' мес.'
	priceElement.textContent = price + ' p.'
}

plusButton.addEventListener('click', function () {
	if (months === 1) {
		months = 3
		price = 2980
	} else if (months === 3) {
		months = 6
		price = 4470
	} else if (months === 6) {
		months = 12
		price = 5960
	}
	updateMonthsAndPrice()
})

minusButton.addEventListener('click', function () {
	if (months === 12) {
		months = 6
		price = 4470
	} else if (months === 6) {
		months = 3
		price = 2980
	} else if (months === 3) {
		months = 1
		price = 1490
	}
	updateMonthsAndPrice()
})

updateMonthsAndPrice()

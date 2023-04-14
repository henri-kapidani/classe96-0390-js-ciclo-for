/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

/*
chiedere numero kilometri e metterli nella costante distance
chiedere l'eta' e metterla nella costate age

basePrice = distance * 0.21

SE (age < 18)
	discountPercent = 20
ALTRIMENTI SE (age >= 65)
	discountPercent = 40
ALTRIMENTI
	discountPercent = 0
FINE SE

discount = prezzoBase * discountPercent / 100

finalPrice = basePrice - discount

formattare finalPrice a due cifre decimali
*/

const pricePerKm = 0.21;
const discountChildren = 20;
const discountSenior = 40;

const inputDistance = document.getElementById('input-distance');
const inputAge = document.querySelector('#input-age');
const btnCalc = document.querySelector('.btn-calc');
const btnReset = document.querySelector('.btn-reset');
const eleOutput = document.getElementById('output');

// btnCalc.addEventListener('click',
// 	function() {
// 		const distance = parseInt(inputDistance.value);
// 		const age = parseInt(inputAge.value);

// 		// console.log(distance, age);

// 		const basePrice = distance * pricePerKm;

// 		// console.log(basePrice);

// 		let discountPercent = 0;
// 		if (age < 18) {
// 			discountPercent = discountChildren;
// 		} else if (age >= 65) {
// 			discountPercent = discountSenior;
// 		}
// 		// console.log(discountPercent);

// 		const discount = basePrice * discountPercent / 100;
// 		console.log(discount);

// 		let finalPrice = basePrice - discount;
// 		// finalPrice = Math.round(finalPrice * 100) / 100;
// 		finalPrice = parseFloat(finalPrice.toFixed(2));
// 		console.log(finalPrice);

// 		eleOutput.innerHTML = finalPrice.toFixed(2);
// 	}
// );

btnReset.addEventListener('click',
	function() {
		inputDistance.value = '';
		inputAge.value = '';
		eleOutput.innerHTML = '';
	}
);


const eleForm = document.querySelector('form');

eleForm.addEventListener('submit',
	function(event) {
		event.preventDefault();
		const distance = parseInt(inputDistance.value);
		const age = parseInt(inputAge.value);

		// console.log(distance, age);

		const basePrice = distance * pricePerKm;

		// console.log(basePrice);

		let discountPercent = 0;
		if (age < 18) {
			discountPercent = discountChildren;
		} else if (age >= 65) {
			discountPercent = discountSenior;
		}
		// console.log(discountPercent);

		const discount = basePrice * discountPercent / 100;
		console.log(discount);

		let finalPrice = basePrice - discount;
		// finalPrice = Math.round(finalPrice * 100) / 100;
		finalPrice = parseFloat(finalPrice.toFixed(2));
		console.log(finalPrice);

		eleOutput.innerHTML = finalPrice.toFixed(2);
	}
);


document.querySelector('a').addEventListener('click',
	function(event) {
		event.preventDefault();
		alert('ti ho disattivato il link')
	}
);
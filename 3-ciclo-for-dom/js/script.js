const eleGrid = document.querySelector('.grid');
let num = parseInt(prompt('numero quadrati'))

for (let i = 0; i <= num; i++) {
	console.log(i);
	eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">${i}</div>`;
}
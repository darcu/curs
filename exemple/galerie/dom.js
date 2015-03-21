var img = document.getElementById('poza');
var stanga = document.getElementById('stanga');
var dreapta = document.getElementById('dreapta');
var play = document.getElementById('play');
var imagini = [
	'img/1.jpg',
	'img/2.jpg',
	'img/3.jpg',
	'img/4.jpg',
	'img/5.jpg'
];

stanga.addEventListener('click', function (e) {
	console.log('click stanga');
});

dreapta.addEventListener('click', function (e) {
	console.log('click dreapta');
});

play.addEventListener('click', function (e) {
	console.log('click play');
});

function changeImage(i){
	img.src = imagini[i];
}

function changePlayName(newName) {
	play.textContent = newName;
}

// this will be useful
// var timeout = setTimeout(function() {
// 	// do something
// }, 10000);

// so will this
// clearTimeout(timeout);


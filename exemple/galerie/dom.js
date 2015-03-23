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

var currentImage = 0;
var timeout;

stanga.addEventListener('click', function(e) {
	console.log('click stanga');
	pauseTimeline();
	previousImage();
});

dreapta.addEventListener('click', function(e) {
	console.log('click dreapta');
	pauseTimeline();
	nextImage();
});

play.addEventListener('click', function(e) {
	console.log('click play');
	playPause();
});

function changeImage(i) {
	img.src = imagini[i];
}

function changePlayName(newName) {
	play.textContent = newName;
}

function playPause() {
	if (timeout) {
		pauseTimeline();
	} else {
		playTimeline();
	}
}

function playTimeline() {
	console.log('playing');

	changePlayName('▮▮');
	timeout = setTimeout(function() {
		nextImage();
		playTimeline();
	}, 2000);
}

function pauseTimeline() {
	console.log('paused');

	changePlayName('▶');
	clearTimeout(timeout);
	timeout = null;
}

function nextImage() {
	if (currentImage < imagini.length - 1) {
		currentImage++;
	} else {
		currentImage = 0;
	}

	changeImage(currentImage);
}

function previousImage() {
	if (currentImage > 1) {
		currentImage--;
	} else {
		currentImage = imagini.length - 1;
	}

	changeImage(currentImage);
}

playTimeline();

// this will be useful
// var timeout = setTimeout(function() {
// 	// do something
// }, 10000);

// so will this
// clearTimeout(timeout);

/**
 *	This is just DOM manipulation and events, for the user interface
 */

// first we get references to the elements in the DOM
var lista = document.getElementById('lista');
var adauga = document.getElementById('adauga');
var adaugaListElement = document.getElementById('adaugaListElement');

var colorTheme = [
	'#6D2243',
	'#BA2640',
	'#EC5E0C',
	'#F78F1E',
	'#85871A',
	'#11644D',
	'#A0B046',
	'#F2C94E',
	'#F78145',
	'#F24E4E'
];

// creates and adds a list elment to the dom
function addElement(text) {
	// add here an element with the due date and time


	// then we create the a span element to hold the text
	var textElement = document.createElement('span');
	// then we set its 'textContent' property to the text we want to display
	textElement.textContent = text;

	// we then create a remove button
	var removeButton = document.createElement('button');
	removeButton.textContent = '✖';

	// we add a click event to the remove button to remove the list item when we click it
	removeButton.addEventListener('click', function() {
		// find out the position of the element to remove
		// this will be useful later
		var index = 0;
		var nodeToCheck = listElement;
		while (nodeToCheck.nextSibling) {
			// next sibling refers to a dom element that is on the same level as the element (node) we're using
			nodeToCheck = nodeToCheck.nextSibling;
			index++;
		}

		lista.removeChild(listElement);
	});

	// we create the list element to hold the text and button
	var listElement = document.createElement('li');
	var color = randomColor();
	listElement.style.backgroundColor = color;

	// we append the text and the remove button to list element
	listElement.appendChild(textElement);
	listElement.appendChild(removeButton);

	// and then append the list element to the list
	lista.insertBefore(listElement, adaugaListElement.nextSibling);
}

// we listen for a change on the input element to add new items
adauga.addEventListener('change', function(e) {
	addElement(adauga.value);
	addToList(adauga.value)
	adauga.value = '';
});

/**
 *	These functions will help you store data in the browser even after you close the tab
 */

function updateStorage(value) {
	localStorage.setItem('lista', value);
}

function getFromStorage() {
	var lsData = localStorage.getItem('lista');
	if (lsData) {
		return lsData.split(',');
	} else {
		return [];
	}
}

// a helper function to generate random colors
var lastColor = 0;
function randomColor() {
	var index;

	do {
		index = Math.ceil(Math.random() * 9);
	} while (index === lastColor);
	lastColor = index;

	return colorTheme[index];
}

/**
 *	Now write the code to make sure your list is saved offline
 */

var listData = [];

function addToList(text) {
	listData.push(text);
	updateStorage(listData);
}

function removeFromList(index) {
	listData.splice(index, 1);
	updateStorage(listData);
}

function init() {

}
listData = getFromStorage();

if (listData) {
	for (var i = 0; i < listData.length; i++) {
		addElement(listData[i]);
	}
}

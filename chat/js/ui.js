var textList = document.getElementById( 'textlist' );

function drawChatLine( list, line ) {
	drawToList( list, line.name + ': ' + line.text );
}

function drawToList( list, line, listener ) {
	var listItem = document.createElement( 'li' );
	listItem.innerHTML = parseBeforeDraw(line);
	list.appendChild( listItem );

	if ( listener ) {
		listItem.addEventListener( 'click', listener );
	}
}

function clearChat() {
	textList.parentNode.removeChild( textList );

	textList = document.createElement( 'ul' );
	textList.id = 'textlist';
	input.parentNode.insertBefore( textList, input );
}

function parseBeforeDraw(text) {
	/* determine the name and style it different */
	/* find urls and make them links */
	/* find emoticons and replace them with icons / or maybe use a font ☘ ☢ ☣ */

	return text;
}

function isURL(text) {
	// parse text
	return false /* or true*/;
}

function addLink(text) {
	// create new a element
	return /*element*/;
}

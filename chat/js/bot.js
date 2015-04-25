var Bot = function() {
	this.name = 'Robo';
};

Bot.prototype.reply = function( chatIndex ) {
	var text = '';
	for ( var i = 0, n = Math.random() * 5; i < n; i++ ) {
		text += chooseWord();
		text += ' ';
	}

	var chatLine = new Chat( this.name, text, Date.now() );

	// setTimeout(function() {
	drawChatLine( textlist, chatLine );
	// }, Math.random() * 2000);

	addToChat( chatIndex, chatLine );
};

function chooseWord() {
	var index = Math.round( Math.random() * wordlist.length - 1 );
	return wordlist[ index ];
}

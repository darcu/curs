var chats = [];
var selectedChat = 0;

var Chat = function( name, text, timestamp ) {
	this.name = name;
	this.text = text;
	this.timestamp = timestamp;
};

function addToChat( index, chatObj ) {
	if ( !chats[ index ] ) {
		chats[ index ] = [];
	}
	chats[ index ].push( chatObj );
}

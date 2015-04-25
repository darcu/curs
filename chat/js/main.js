var input = document.getElementById( 'enter' );
var usersElement = document.getElementById( 'users' );

var users = [ 'unu', 'doi', 'trei' ];
var chatBot = new Bot();

function init() {
	users.forEach( function( user, i, arr ) {
		chats[ i ] = [];

		drawToList( usersElement, user, function( e ) {
			clearChat();

			for (var i = 0, n = usersElement.children.length; i < n; i++) {
				usersElement.children[i].classList.remove('active');
			}

			e.target.classList.add('active');

			selectedChat = users.indexOf(user);
			chats[ selectedChat ].forEach( function( line ) {
				drawChatLine( textList, line );
			} );
		} );
	} );

	usersElement.children[0].classList.add('active');
}

input.addEventListener( 'change', function( e ) {
	var line = new Chat( 'Eu', e.target.value, Date.now() );

	drawChatLine( textlist, line );
	addToChat( selectedChat, line );

	e.target.value = '';

	chatBot.reply(selectedChat);
} );

init();

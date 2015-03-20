var xhr = new XMLHttpRequest();
xhr.open( 'GET', 'readme.md', true );
xhr.responseType = 'blob';
xhr.onload = function( e ) {
	if ( this.status === 200 ) {
		var reader = new FileReader();
		reader.onload = handleMark;
		reader.readAsText( this.response );
	}
};
xhr.send();

function handleMark( e ) {
	document.getElementById( 'content' ).innerHTML = marked( e.target.result );

	var codeBlocks = document.querySelectorAll( 'pre code' );
	codeBlocks = [].slice.call(codeBlocks);
	codeBlocks.forEach(function(block) {
		hljs.highlightBlock(block);
	})
};

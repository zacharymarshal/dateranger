$(function(){
	$( '.demo-list a' ).click(function( e ){
		e.preventDefault();
		$( '.demo-frame' ).attr( 'src', $( this ).attr('href') );
		$( '.demo-list li' ).removeClass( 'active' );
		$( this ).parent().addClass('active');
		$( '.demo-source' ).html( '<pre><code>' + $( '.demo-frame' ) + '</code></pre>' );
	})
})
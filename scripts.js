window.addEventListener("load", (event) => {
    var flkty = new Flickity( '.main-carousel', {
        // options
        wrapAround: true, 
        hash: true,
        pageDots: false 
      });
    });

flkty.on( 'settle', function( index ) {
    alert("hello1");  
});
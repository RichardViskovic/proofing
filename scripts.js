window.addEventListener("load", (event) => {
    const flkty = new Flickity('.main-carousel', {
        // options
        wrapAround: true,
        hash: true,
        pageDots: false,
    });
    flkty.on( 'change', function() { document.querySelectorAll('h2').forEach(el => el.style.backgroundPosition="right bottom");});
    flkty.on('settle', function () { document.querySelectorAll('h2').forEach(el => el.style.backgroundPosition="left bottom"); });
});



$(document).foundation()


/*
-- mit each wird durch jede section gegangen
-- für jede wird onScreen initialisiert
-- onScreen prüft ob das Element im viewport sichtbar wird
-- falls sichtbar wird die Klasse isonScreen zugefügt
-- falls das Element wieder aus dem viewport verschwindet, wird die Klasse wieder entfernt
-- mit dieser Klasse kann im css gearbeitet werden, siehe ab Zeile 22 im app.css
*/

$( ".raster img" ).each(function( index, section ) {
     $(section).onScreen({
        container: window,
        direction: 'vertical',
        doIn: function() {
            $(section).addClass('isonScreen');
        },
        doOut: function() {
            $(section).removeClass('isonScreen');
        },
        tolerance: 0,
        throttle: 50,
        lazyAttr: null,
        debug: false
    });
});

direction: ''

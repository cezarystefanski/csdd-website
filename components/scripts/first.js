$(window).load(function() { // Czekamy na załadowanie całej zawartości strony
    $("#preloader #image").fadeOut(); // Usuwamy grafikę ładowania
    $("#preloader").delay(350).fadeOut("slow"); // Usuwamy diva przysłaniającego stronę
})

console.log('Checking the console? Naughty!');

$(document).foundation();

/*
 * Replace all SVG images with inline SVG
 */
/*jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});*/

$(document).ready(function(){
    var liame = ['com', 'cezary', 'csdd', 'pl'];
    $(".e-l").append(liame[1]+'@'+liame[2]+'.'+liame[0]+'.'+liame[3]);
});

var app = angular.module("mainApp", []);

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-66002904-1', 'auto');
ga('send', 'pageview');
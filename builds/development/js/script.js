(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

// JavaScript Document
app.controller('MainController',['$scope', function($scope) {
  $scope.skills = [
    {
      name: 'HTML5',
	  meter: '80%',
	  image: 'images/skills/html5.png',
	  modalName: 'html5',
	  modalTitle: 'html5Title',
	  modalDesc: 'Professional knowledge, without some new in-depth stuff yet',
	  modalText: 'Semantic markup, microdata, forms, new HTML5 tags, webfonts, HAML, fundamentals of Canvas, UX'
    },
    {
      name: 'CSS3',
	  meter: '90%',
	  image: 'images/skills/css3.png',
	  modalName: 'css3',
	  modalTitle: 'css3Title',
	  modalDesc: 'Almost whole professional knowledge',
	  modalText: 'Selectors, properties, pseudoselectors, floats, flexbox, media queries, grids, Responsive Web Design, fundamentals of typography'
    },
    {
      name: 'JavaScript',
	  meter: '60%',
	  image: 'images/skills/js.png',
	  modalName: 'javaScript',
	  modalTitle: 'javaScriptTitle',
	  modalDesc: 'Theoretical knowledge and most practical application of pure JS',
	  modalText: 'Data structures, objects, functions, events, DOM modification, fundamentals of new ES5 and ES Harmony features, fundamentals of regular expressions'
    },
    {
      name: 'SASS',
	  meter: '90%',
	  image: 'images/skills/sass.png',
	  modalName: 'sass',
	  modalTitle: 'sassTitle',
	  modalDesc: 'Almost whole professional knowledge',
	  modalText: 'Variables, imports, partials, mixins, functions, Compass, Susy'
    },
    {
      name: 'jQuery',
	  meter: '70%',
	  image: 'images/skills/jquery.png',
	  modalName: 'jQuery',
	  modalTitle: 'jQueryTitle',
	  modalDesc: 'Good practical knowledge',
	  modalText: 'DOM manipulation, most built-in methods, jQuery UI, jQuery Mobile'
    },
    {
      name: 'AngularJS',
	  meter: '40%',
	  image: 'images/skills/angularjs.png',
	  modalName: 'angularJs',
	  modalTitle: 'angularJsTitle',
	  modalDesc: 'Some knowledge',
	  modalText: 'Basic ng-repeat content template fill (like this one), basic understanding of directives and modules'
    },
    {
      name: 'Git',
	  meter: '80%',
	  image: 'images/skills/git.png',
	  modalName: 'git',
	  modalTitle: 'gitTitle',
	  modalDesc: 'Good knowledge',
	  modalText: 'Most often used commands, use of Git Shell, .gitignore creation, markdown readmes, use in workflow'
    },
    {
      name: 'GitHub',
	  meter: '100%',
	  image: 'images/skills/github.png',
	  modalName: 'gitHub',
	  modalTitle: 'gitHubTitle',
	  modalDesc: 'Full knowledge',
	  modalText: 'Branches, pull requests, very good at blaming ;)'
    },
    {
      name: 'Gulp',
	  meter: '50%',
	  image: 'images/skills/gulp.png',
	  modalName: 'gulp',
	  modalTitle: 'gulpTitle',
	  modalDesc: 'test',
	  modalText: 'Searching adequate npm modules, creating basic workflow settings with tools like Compass, concatenation, minifying, live reloading, basic pipe notation'
    },
    {
      name: 'Foundation',
	  meter: '100%',
	  image: 'images/skills/foundation.png',
	  modalName: 'zurbFoundation',
	  modalTitle: 'zurbFoundationTitle',
	  modalDesc: 'test',
	  modalText: 'Full understanding of Foundation features, plugins and SASS settings. In fact, this site is based on Foundation'
    },
    {
      name: 'Photoshop',
	  meter: '50%',
	  image: 'images/skills/photoshop.png',
	  modalName: 'photoshop',
	  modalTitle: 'photoshopTitle',
	  modalDesc: 'test',
	  modalText: 'Mockups, mockup to webdesign, basic photo manipulation, basic CameraRaw, fundamentals of design, color and composition'
    },
    {
      name: 'Illustrator',
	  meter: '50%',
	  image: 'images/skills/illustrator.png',
	  modalName: 'illustrator',
	  modalTitle: 'illustratorTitle',
	  modalDesc: 'test',
	  modalText: 'Vector manipulation, wireframing, SVG graphics'
    },
    {
      name: 'Joomla',
	  meter: '50%',
	  image: 'images/skills/joomla.png',
	  modalName: 'joomla',
	  modalTitle: 'joomlaTitle',
	  modalDesc: 'test',
	  modalText: 'Understanding of the platform, basic settings, components, plugins, modules, creating layouts'
    },
    {
      name: 'Visual Studio',
	  meter: '20%',
	  image: 'images/skills/visualstudio.png',
	  modalName: 'visualStudio',
	  modalTitle: 'visualStudioTitle',
	  modalDesc: 'test',
	  modalText: 'Basic understanding of the IDE, basic Windows Store app programming knowledge'
    },
    {
      name: 'C#',
	  meter: '20%',
	  image: 'images/skills/csharp.png',
	  modalName: 'cSharp',
	  modalTitle: 'cSharpTitle',
	  modalDesc: 'test',
	  modalText: 'Fundamentals of the programming language, syntax, most data structures, objects, functions'
    },
    {
      name: 'Visual Basic',
	  meter: '20%',
	  image: 'images/skills/vb.png',
	  modalName: 'visualBasic',
	  modalTitle: 'visualBasicTitle',
	  modalDesc: 'test',
	  modalText: 'Fundamentals of the programming language, syntax, most data structures, functions'
    },
    {
      name: 'PHP',
	  meter: '40%',
	  image: 'images/skills/php.png',
	  modalName: 'php',
	  modalTitle: 'phpTitle',
	  modalDesc: 'test',
	  modalText: 'Fundamentals of the programming language, syntax, working with HTML forms, basic XML'
    },
    {
      name: 'C',
	  meter: '40%',
	  image: 'images/skills/c.png',
	  modalName: 'cLang',
	  modalTitle: 'cLangTitle',
	  modalDesc: 'test',
	  modalText: 'Fundamentals of the programming language and languages derivative from C'
    },
    {
      name: 'Sublime Text',
	  meter: '90%',
	  image: 'images/skills/sublimetext.png',
	  modalName: 'sublimeText',
	  modalTitle: 'sublimeTextTitle',
	  modalDesc: 'test',
	  modalText: 'Multi-line editing, package control, editor of choice along with Adobe Dreamweaver'
    },
    {
      name: 'Emmet',
      meter: '80%',
      image: 'images/skills/emmet.png',
	  modalName: 'emmet',
	  modalTitle: 'emmetTitle',
	  modalDesc: 'test',
	  modalText: 'HAML-like syntax, abbreviations, wrapping, plugin of choice'
    },
    {
      name: 'Google',
      meter: '100%',
      image: 'images/skills/google.png',
      modalName: 'google',
      modalTitle: 'googleTitle',
      modalDesc: 'Full knowledge',
      modalText: 'Perhaps the most useful skill in the world - yes, I can use Google very well. "Never memorize something that you can look up." - Einstein'
    }
  ],
  $scope.projects = [
    {
      name: 'Kino-Teatr Kurtyna w Sulejówku',
	  image: 'images/portfolio/kurtyna.jpg',
	  thumb: 'images/portfolio/kurtyna.th.jpg',
	  modalName: 'kinoTeatrKurtyna',
	  modalTitle: 'kinoTeatrKurtynaTitle',
	  modalText: 'Layout design, promotional items design, logo design, coding and managing the CMS',
	  modalTools: 'Joomla, custom CSS layout',
	  url: 'http://kinoteatrkurtyna.com.pl/'
    },
    {
      name: 'Alarmserwis',
	  image: 'images/portfolio/alarmserwis.jpg',
	  thumb: 'images/portfolio/alarmserwis.th.jpg',
	  modalName: 'AlarmSerwis',
	  modalTitle: 'AlarmSerwisTitle',
	  modalText: 'Still in production. Layout design, logo design, coding the website',
	  modalTools: 'Foundation, custom CSS layout, AngularJS, WOW.js, jQuery, slick.js, Google Maps API',
	  url: '#'
    }
  ]
  /*;
  $scope.slides = [
    {
	  img: 'img/slides/satel.jpg',
	  alt: 'satel',
	  txt: 'Satel'
	},
	{
	  img: 'img/slides/texecom.jpg',
	  alt: 'texecom',
	  txt: 'TexeCom'
	},
	{
	  img: 'img/slides/zavio.jpg',
	  alt: 'zavio',
	  txt: 'Zavio'
	},
	{
	  img: 'img/slides/samsung.jpg',
	  alt: 'samsung',
	  txt: 'Samsung'
	},
	{
	  img: 'img/slides/blupont.jpg',
	  alt: 'blupont',
	  txt: 'BluPont'
	},
	{
	  img: 'img/slides/sony.jpg',
	  alt: 'sony',
	  txt: 'Sony'
	}
  ];*/
}]);
},{}]},{},[1])
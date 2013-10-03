require.config({
    paths: {
        angular: 'vendor/angular.min',
//        angularRoute: '../../bower_components/angular-route/angular-route',
//        angularMocks: '../../bower_components/angular-mocks/angular-mocks',
//        text: '../../bower_components/requirejs-text/text'
    },
    baseUrl: 'js',
    shim: {
        'angular': {'exports': 'angular'},
//        'angularRoute': ['angular'],
//        'angularMocks': {
//            deps: ['angular'],
//            'exports': 'angular.mock'
//        }
    },
    priority: [
        "angular"
    ]
});

// hey Angular, we're bootstrapping manually!
window.name = "NG_DEFER_BOOTSTRAP!";

require(
        [
            "angular",
            "app/app",
//            "js/app/boardController.js",
//            "js/app/clubsController.js",
//            "js/app/eventsController.js",
//            "js/vendor/modernizr-2.6.2.min.js",
//            "js/vendor/jquery-1.10.2.min.js",
//            "js/vendor/jquery.isotope.js",
//            "js/vendor/jquery.prettyPhoto.js",
//            "js/vendor/angular-strap.min.js",
        ],
        function(angular) {
            'use strict';
            var $html = angular.element(document.getElementsByTagName('html')[0]);
            angular.element().ready(function() {
                $html.addClass('ng-app');
                angular.bootstrap($html, [app['name']]);
            })
        });
require.config({
	paths: {
		angular: 'vendor/angular.min',
		jquery: 'vendor/jquery-1.10.2.min',
		isotope: 'vendor/jquery.isotope',
		prettyPhoto: 'vendor/jquery.prettyPhoto',
//		angularRoute: '../../bower_components/angular-route/angular-route',
//		angularMocks: '../../bower_components/angular-mocks/angular-mocks',
//		text: '../../bower_components/requirejs-text/text'
	},
	baseUrl: 'js',
	shim: {
		'angular' : {'exports' : 'angular'},
		'jquery' : {'exports' : 'jquery'},
//		'angularRoute': ['angular'],
//		'angularMocks': {
//			deps:['angular'],
//			'exports':'angular.mock'
//		}
		'isotope': {
			deps:['jquery'],
                },
		'prettyPhoto': {
			deps:['jquery'],
                },
		'plugins': {
			deps:['jquery','angular','prettyPhoto'],
                },
	},
	priority: [
		"angular"
	]
});

// hey Angular, we're bootstrapping manually!
window.name = "NG_DEFER_BOOTSTRAP!";

require( [
	'angular',
	'app',
        'jquery',
        'isotope',
//	'routes',
        'plugins'
], function(angular, app, routes) {
	'use strict';
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		$html.addClass('ng-app');
		angular.bootstrap($html, [app['name']]);
	});
});

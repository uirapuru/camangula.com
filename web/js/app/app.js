'use strict';

var app = angular.module(
        'myApp',
        [
//                'ngRoute',
            'myApp.controllers',
            'myApp.filters',
            'myApp.services',
            'myApp.directives'
        ],
        function($interpolateProvider) {
            $interpolateProvider.startSymbol('{[');
            $interpolateProvider.endSymbol(']}');
        }
)
        .config(['$routeProvider', function($routeProvider) {
                $routeProvider.
                        when('/start', {templateUrl: 'start.html',controller: 'BoardController'}).
                        when('/groups', {templateUrl: 'groups.html'}).
                        when('/events', {templateUrl: 'events.html'}).
                        when('/contact', {templateUrl: 'contact.html'}).
                        when('/news', {templateUrl: 'news.html'}).
                        otherwise({redirectTo: '/start'});
            }]);
;


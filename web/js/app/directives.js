'use strict';

angular.module('myApp.directives', [])
        .directive('videos', function($timeout) {
            return {
                scope: {
                    items: '=videos'
                },
                template: '<a ng-repeat="video in items[0]" class="item size{[$index%7]}" href="http://www.youtube.com/watch?v={[video]}" rel="prettyPhoto[videos]" pretty-photo><img src="#" ng-src="http://img.youtube.com/vi/{[video]}/0.jpg" /></a>',
                link: function(scope, element, attrs) {
                    scope.$watch('tails', function(newVal, oldVal) {
                        $timeout(function() {
                            console.log("timeout")
                        });
                    }, true);
                }
            }
        })
        .directive('prettyPhoto', function() {
            return function(scope, element, attrs) {
                $(element).prettyPhoto();
            }
        })


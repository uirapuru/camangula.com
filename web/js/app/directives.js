'use strict';

angular.module('myApp.directives', [])
        .directive('isotope', function($timeout) {
            return {
                scope: {
                    items: '=isotope'
                },
                template: '<a ng-repeat="video in items[0]" class="item {[items[1][$index%4]]}" href="http://www.youtube.com/watch?v={[video]}" rel="prettyPhoto[videos]" pretty-photo><img src="#" ng-src="http://img.youtube.com/vi/{[video]}/0.jpg" /></a>',
                link: function(scope, element, attrs) {
                    var options = {
                        animationEngine: 'jquery',
                        itemSelector: '.item',
                        masonry: {
                            columnWidth: 15
                        }
                    };
console.log("isotope");
                    element.isotope(options);

                    scope.$watch('tails', function(newVal, oldVal) {
                        $timeout(function() {
                            element.isotope('reloadItems')
                                    .isotope({sortBy: 'random'});
                        });
                    }, true);

                }
            }
        })
        .directive('prettyPhoto', function() {
            return function(scope, element, attrs) {
                $(element).prettyPhoto();

//                $(element).on("click", function(e) {
//                    e.preventDefault();
//                    return false;
//                });

            }
        })


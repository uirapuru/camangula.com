var myApp = angular.module('myApp', [], function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[');
    $interpolateProvider.endSymbol(']}');
});
myApp.controller('BoardController',
        function($scope) {
            $scope.videos = {
                "NzzsClyL0Hg": "big",
                "76EE6kX_nyk": "medium",
                "kveHiKKwHEc": "small",
                "l5glGaTkH6M": "medium",
                "yEtQ0l8pEUA": "medium",
                "F4iQdHKQXO4": "big",
                "CG-7mThHvy0": "small",
                "7q5oT2x4ssg": "small",
                "WDzpJu1iOWI": "vsmall",
                "8keFNnSDPg4": "vsmall",
                "oOvhgrELGfY": "vsmall",
                "olousD0kADQ": "small",
                "1qhHqJqnw30": "medium",
                "Y9502EfuEFw": "small",
                "8xO9WTqAAuU": "small",
                "WKjuaSr_ZHg": "vsmall",
                "vfe4JecTuec": "vsmall",
                "qCen_vf-QOg": "medium",
                "Dzp76UFe1AI": "small",
                "M22S3dl07zA": "small",
                "Ea19XCI112o": "medium",
                "87l-clyxMy0": "big",
                "YsLjx2pNJLQ": "small",
                "hBcWAVwr0i0": "vsmall",
                "bQ5y1hYosP0": "small"
            };
        });
myApp.controller('ClubsController',
        function($scope) {
            $scope.country = null;

            $scope.countries = {
                de: "Germany",
                br: "Brasil",
                pl: "Poland",
                en: "England",
                jp: "Japan",
                gf: "French Guiana",
            }

            $scope.clubs = {
                de: {
                    "Hamburg": {
                        fb: "92929292",
                        mail: "hh@camangula.com",
                        gsm: "324324234234",
                        www: "hamburg.pl"
                    },
                    "Hannover": {
                        fb: "92929292",
                        mail: "hh@camangula.com",
                        gsm: "324324234234",
                        www: "hamburg.pl"
                    },
                },
                br: {
                    "Rio de Janeiro": {
                        fb: "92929292",
                        mail: "hh@camangula.com",
                        gsm: "324324234234",
                        www: "hamburg.pl"
                    },
                    "Belo Horizonte": {
                        fb: "92929292",
                        mail: "hh@camangula.com",
                        gsm: "324324234234",
                        www: "hamburg.pl"
                    },
                    "Brasilia": {
                        fb: "92929292",
                        mail: "hh@camangula.com",
                        gsm: "324324234234",
                        www: "hamburg.pl"
                    },
                    "Manaus": {
                        fb: "92929292",
                        mail: "hh@camangula.com",
                        gsm: "324324234234",
                        www: "hamburg.pl"
                    },
                },
                pl: {
                    "Gdynia": {
                        fb: "92929292",
                        mail: "hh@camangula.com",
                        gsm: "324324234234",
                        www: "hamburg.pl"
                    },
                    "Olsztyn": {
                        fb: "92929292",
                        mail: "hh@camangula.com",
                        gsm: "324324234234",
                        www: "hamburg.pl"
                    },
                    "Wrocław": {
                        fb: "92929292",
                        mail: "hh@camangula.com",
                        gsm: "324324234234",
                        www: "hamburg.pl"
                    },
                },
                en: {
                    "Bristol": {
                        fb: "92929292",
                        mail: "hh@camangula.com",
                        gsm: "324324234234",
                        www: "hamburg.pl"
                    },
                    "London": {
                        fb: "92929292",
                        mail: "hh@camangula.com",
                        gsm: "324324234234",
                        www: "hamburg.pl"
                    },
                },
                jp: {
                    "Osaka": {
                        fb: "92929292",
                        mail: "hh@camangula.com",
                        gsm: "324324234234",
                        www: "hamburg.pl"
                    },
                    "Tokyo": {
                        fb: "92929292",
                        mail: "hh@camangula.com",
                        gsm: "324324234234",
                        www: "hamburg.pl"
                    },
                },
                gf: {
                    "DaFuck?": {
                        fb: "92929292",
                        mail: "hh@camangula.com",
                        gsm: "324324234234",
                        www: "hamburg.pl"
                    },
                },
            }

            $scope.chooseCountry = function(c) {
                $scope.country = c;
            }
        });

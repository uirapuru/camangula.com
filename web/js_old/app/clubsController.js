myApp.controller('ClubsController',
        function($scope) {
            $scope.country = null;

            $scope.countries = {
                de: "Germany",
                br: "Brasil",
                pl: "Poland",
                en: "England",
                jp: "Japan",
                gf: "Guiana",
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
                    "Gdańsk": {
                        fb: "92929292",
                        mail: "hh@camangula.com",
                        gsm: "324324234234",
                        www: "hamburg.pl"
                    },
                    "Słupsk": {
                        fb: "92929292",
                        mail: "hh@camangula.com",
                        gsm: "324324234234",
                        www: "hamburg.pl"
                    },
                    "Warszawa": {
                        fb: "92929292",
                        mail: "hh@camangula.com",
                        gsm: "324324234234",
                        www: "hamburg.pl"
                    },
                    "Katowice": {
                        fb: "92929292",
                        mail: "hh@camangula.com",
                        gsm: "324324234234",
                        www: "hamburg.pl"
                    },
                    "Kraków": {
                        fb: "92929292",
                        mail: "hh@camangula.com",
                        gsm: "324324234234",
                        www: "hamburg.pl"
                    },
                    "Tychy": {
                        fb: "92929292",
                        mail: "hh@camangula.com",
                        gsm: "324324234234",
                        www: "hamburg.pl"
                    },
                    "Piekary Śl.": {
                        fb: "92929292",
                        mail: "hh@camangula.com",
                        gsm: "324324234234",
                        www: "hamburg.pl"
                    },
                    "Zabrze": {
                        fb: "92929292",
                        mail: "hh@camangula.com",
                        gsm: "324324234234",
                        www: "hamburg.pl"
                    },
                    "Sosnowiec": {
                        fb: "92929292",
                        mail: "hh@camangula.com",
                        gsm: "324324234234",
                        www: "hamburg.pl"
                    },
                    "Dąbrowa Górnicza": {
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
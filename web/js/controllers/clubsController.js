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
        })

myApp.controller('EventsController',
        function($scope) {
            $scope.events = [
                {
                    dateStart: "19.10.2013",
                    dateEnd: "20.10.2013",
                    city: "Hamburg",
                    description: "Batizado",
                },
                {
                    dateStart: "08.11.2013",
                    dateEnd: "10.11.2013",
                    city: "Wrocław",
                    description: "Batizado",
                },
                {
                    dateStart: "07.12.2013",
                    dateEnd: "08.12.2013",
                    city: "Gdańsk",
                    description: "Festiwal Camangula",
                },
                {
                    dateStart: "10.01.2014",
                    dateEnd: "12.01.2014",
                    city: "Wisła",
                    description: "Vem Jogar",
                },
                {
                    dateStart: "02.2014",
                    dateEnd: "02.2014",
                    city: "-",
                    description: "Capoeira w Mieście - ferie zimowe",
                },
                {
                    dateStart: "21.03.2014",
                    dateEnd: "23.03.2014",
                    city: "Poznań",
                    description: "Batizado",
                },
                {
                    dateStart: "17.04.2014",
                    dateEnd: "21.04.2014",
                    city: "Hamburg",
                    description: "Meeting",
                },
                {
                    dateStart: "01.05.2014",
                    dateEnd: "04.05.2014",
                    city: "Gdańsk",
                    description: "Batizado",
                },
                {
                    dateStart: "16.05.2014",
                    dateEnd: "18.05.2014",
                    city: "Katowice",
                    description: "Batizado",
                },
                {
                    dateStart: "30.05.2014",
                    dateEnd: "02.06.2014",
                    city: "Kraków",
                    description: "Batizado",
                },
                {
                    dateStart: "13.06.2014",
                    dateEnd: "15.06.2014",
                    city: "Warszawa",
                    description: "Batizado",
                },
                {
                    dateStart: "28.06.2014",
                    dateEnd: "07.07.2014",
                    city: "Ustka",
                    description: "Acampamento",
                },
                {
                    dateStart: "08.07.2014",
                    dateEnd: "13.07.2014",
                    city: "Ustka",
                    description: "X Letni Festiwal",
                },
                {
                    dateStart: "01.07.2014",
                    dateEnd: "31.08.2014",
                    city: "-",
                    description: "Capoeira w Mieście",
                },
            ];

        });
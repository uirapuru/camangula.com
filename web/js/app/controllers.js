angular.module('myApp.controllers', ['myApp.services'])
        .controller('BoardController', ['$scope', '$timeout', 'dataService',
            function($scope, $timeout, dataService) {
                $scope.update = function() {
                    $scope.collection = dataService.getVideos();
                    $timeout($scope.update, 4000);
                };

                $scope.update();
            }])
        .controller('ClubsController',
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
                            "WrocBaw": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "GdaDsk": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "SBupsk": {
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
                            "Piekary Zl.": {
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
                            "Dbrowa Górnicza": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Olsztyn123": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "WrocBaw123": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Gdyni123a": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Olszt123yn": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "WrocBa23w": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Gdy1234nia": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Olsz24tyn": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Wroc1234Baw": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "G21421dynia": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Olsz1234tyn": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Wroc1234B2aw": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Gd2134ynia": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Olsz34123tyn": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Wro2314cBaw": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Gdyni2134213a": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Olsz134213tyn": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Wroc234214Baw": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Gdy213414nia": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Ol2134214sztyn": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Wroc231414Baw": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Gdy1342134nia": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Ols21342134ztyn": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Wr2314214ocBaw": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Gd1342134ynia": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Ols2342134ztyn": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Wroc24134Baw": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Gdy2141341nia": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Ols21342134z2134tyn": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Wro2314214cBaw": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Gdy4214213421nia": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Olsz342534tyn": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                            "Wro56757cBaw": {
                                fb: "92929292",
                                mail: "hh@camangula.com",
                                gsm: "324324234234",
                                www: "hamburg.pl"
                            },
                        },
                        en: {
                            "Bri76865stol": {
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
        .controller('EventsController',
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
                            city: "WrocBaw",
                            description: "Batizado",
                        },
                        {
                            dateStart: "07.12.2013",
                            dateEnd: "08.12.2013",
                            city: "GdaDsk",
                            description: "Festiwal Camangula",
                        },
                        {
                            dateStart: "10.01.2014",
                            dateEnd: "12.01.2014",
                            city: "WisBa",
                            description: "Vem Jogar",
                        },
                        {
                            dateStart: "02.2014",
                            dateEnd: "02.2014",
                            city: "-",
                            description: "Capoeira w Mie[cie - ferie zimowe",
                        },
                        {
                            dateStart: "21.03.2014",
                            dateEnd: "23.03.2014",
                            city: "PoznaD",
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
                            city: "GdaDsk",
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
                            description: "Capoeira w Mie[cie",
                        },
                    ];
                });


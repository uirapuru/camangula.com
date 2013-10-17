'use strict';
angular.module('myApp.services', [])
        .service('dataService', function($http) {
            return {
                getVideos: function() {
                    return [
                        [
                            "NzzsClyL0Hg",
                            "76EE6kX_nyk",
                            "kveHiKKwHEc",
                            "l5glGaTkH6M",
                            "yEtQ0l8pEUA",
                            "F4iQdHKQXO4",
                            "CG-7mThHvy0",
                            "7q5oT2x4ssg",
                            "WDzpJu1iOWI",
                            "8keFNnSDPg4",
                            "oOvhgrELGfY",
                            "olousD0kADQ",
                            "1qhHqJqnw30",
                            "Y9502EfuEFw",
                            "8xO9WTqAAuU",
                            "WKjuaSr_ZHg",
                            "vfe4JecTuec",
                            "qCen_vf-QOg",
                            "Dzp76UFe1AI",
                            "M22S3dl07zA",
                            "Ea19XCI112o",
                            "87l-clyxMy0",
                            "YsLjx2pNJLQ",
                            "hBcWAVwr0i0",
                            "bQ5y1hYosP0",
                        ],

                        [
                            "big",
                            "medium",
                            "small",
                            "vsmall",
                            "big",
                            "medium",
                            "small",
                            "vsmall",
                            "big",
                            "medium",
                            "small",
                            "vsmall",
                            "big",
                            "medium",
                            "small",
                            "vsmall",
                            "big",
                            "medium",
                            "small",
                            "vsmall",
                            "big",
                            "medium",
                            "small",
                            "vsmall",
                            "big",
                            "medium",
                            "small",
                            "vsmall",
                        ]
                    ];
                },
                getClubs: function() {
                    return {};
                }
            };
        });

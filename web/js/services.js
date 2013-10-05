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
//                                .sort(function() {
//                            return 0.5 - Math.random()
//                        }),
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
//                                .sort(function() {
//                            return 0.5 - Math.random()
//                        })
                    ];
                    return {
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
                    }
                },
                getClubs: function() {
                    return {};
                }
            };
        });

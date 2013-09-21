var myApp = angular.module('myApp', [], function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[');
    $interpolateProvider.endSymbol(']}');
});

myApp.controller('BoardController',
        function($scope) {
            $scope.videos = shuffle([
                "NzzsClyL0Hg",
                "F4iQdHKQXO4",
                "87l-clyxMy0",
                "1qhHqJqnw30",
                "qCen_vf-QOg",
                "Ea19XCI112o",
                "76EE6kX_nyk",
                "l5glGaTkH6M",
                "yEtQ0l8pEUA",
                "CG-7mThHvy0",
                "7q5oT2x4ssg",
                "WDzpJu1iOWI",
                "8keFNnSDPg4",
                "oOvhgrELGfY",
                "olousD0kADQ",
                "Y9502EfuEFw",
                "kveHiKKwHEc",
                "8xO9WTqAAuU",
                "WKjuaSr_ZHg",
                "vfe4JecTuec",
                "Dzp76UFe1AI",
                "M22S3dl07zA",
                "YsLjx2pNJLQ",
                "hBcWAVwr0i0",
                "bQ5y1hYosP0"
            ]);
        });

function shuffle(array) {
    return array.sort(function() {
        return 0.5 - Math.random()
    });
}
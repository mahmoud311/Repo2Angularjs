var appquiz = angular.module("projectQuizzes", ["ui.router"])
    .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        $stateProvider
            .state("index", {
                url: "/",
                templateUrl: "views/quizzes.html",
                controller: "quizzesCtrl"
            })
            .state("aaa", {
                url: "/aaa",
                template: "asdasd"
            });
        $urlRouterProvider.otherwise('/');
    });

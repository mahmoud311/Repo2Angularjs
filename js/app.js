var appquiz = angular.module("projectQuizzes", ["ui.router"])
    .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        $stateProvider
            .state("index", {
                url: "/",
                templateUrl: "views/quizzes.html",
                controller: "allQuestionsCtrl"
            })
            .state("addQuiz", {
                url: "/addquiz",
                templateUrl: "views/addquiz.html",
                controller: "quizzesCtrl"
            })
            .state("addQuestion", {
                url: "/addquestion",
                templateUrl: "views/addquestion.html",
                controller: "questionsCtrl"
            }).state("showQuiz", {
                url: "/showquiz/:id",
                templateUrl: "views/showquiz.html",
                controller: "questionsShowCtrl"
            });
        $urlRouterProvider.otherwise('/');
    });

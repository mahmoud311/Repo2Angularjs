var appquiz = angular.module("projectQuizzes", ["ui.router","toaster","ui.bootstrap"])
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
            }).state("showquiz", {
                url: "/showquiz/:id",
                templateUrl: "views/showquiz.html",
                controller: "questionsShowCtrl"
            })
            .state("result", {
                url: "/result",
                templateUrl: "views/result.html",
                controller: "resultCtrl"
            })
             .state("showOneQuiz", {
                url: "/showonequiz",
                templateUrl: "views/showonequiz.html",
                controller: "showOneQuizCtrl"
            });
        $urlRouterProvider.otherwise('/');
    });

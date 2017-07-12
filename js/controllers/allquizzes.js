appquiz.controller("allQuestionsCtrl", ['$scope', '$http','$rootScope', '$state','dataQuizzes', function ($scope,$statem,$rootScope ,$http, dataQuizzes) {
    $scope.vm = {};
    dataQuizzes.getQuizzes().then(function (res) {
        $scope.allQuizzes = res;
        console.log(res);
    });

    $scope.activeQuiz = function (quiz) {
        console.log(quiz);
    }
}]);


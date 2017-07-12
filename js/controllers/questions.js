appquiz.controller("questionsCtrl", ['$scope', '$http', 'dataQuizzes', 'dataQuestions', function ($scope, $http, dataQuizzes, dataQuestions) {
    $scope.vm = {};
    dataQuestions.getQuizzes().then(function (res) {
        $scope.allQuizzes = res;
        console.log(res);
    });
    $scope.addQuestion = function () {
        dataQuizzes.addQuestion($scope.question);
        console.log($scope.question);
        $scope.question = {};
    }
}]);

appquiz.controller("quizzesCtrl", ['$scope','$state','$http','dataQuizzes', function ($scope,$state,$http,dataQuizzes) {
    console.log("asdasdasd");
    $scope.addQuiz = function () {
       dataQuizzes.addQuiz($scope.quiz);
       $scope.quiz= {};
    }
}]);
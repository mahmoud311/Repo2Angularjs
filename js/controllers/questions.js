appquiz.controller("questionsCtrl", ['$scope','$http','dataQuizzes', function ($scope,$http,dataQuizzes) {
    $scope.vm = {};
   dataQuizzes.getQuizzes().then(function (res) {
        $scope.allQuizzes = res;
        console.log(res);
    });
    $scope.addQuestion = function(){
        dataQuizzes.addQuestion($scope.question);
        console.log($scope.question);
        $scope.question={};
    }
}]);

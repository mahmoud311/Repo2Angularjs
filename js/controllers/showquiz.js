appquiz.controller("questionsShowCtrl", ['$scope', '$state', '$stateParams', 'dataQuestions', 'msgBoxService', function ($scope, $state, $stateParams, dataQuestions, msgBoxService,$uibModal) {
    $scope.vm = {};
    console.log($stateParams.id);
    dataQuestions.getDataQuiz($stateParams.id).then(function (res) {
        $scope.hiddenProgress = false;
        $scope.hiddenQuestions = false;
        $scope.showNoData = true;
        if (res.length == 0) {
            $scope.hiddenProgress = true;
            $scope.hiddenQuestions = true;
            $scope.showNoData = true;
            msgBoxService.showError("About this quiz !!", "This quiz  doesn't  contain any questions");
            console.log("not have any data");
        } else {
            $scope.quizQuestions = res;
            $scope.numQuestion = $scope.quizQuestions.length;
            console.log(res);
            console.log($scope.quizQuestions.length)
            $scope.arr = Array.apply(null, Array($scope.quizQuestions.length)).map(Number.prototype.valueOf, 5);
            msgBoxService.showSuccess("About this quiz !!", "This quiz contain questions");
        }
    });
    $scope.error = false;
    $scope.finalise = false;
    $scope.activeQuestion = 0;
    $scope.numQuestionsAnswered = 0;
    $scope.setActiveQuestion = function (index) {
        if (index === undefined) {
            var breakOut = false;
            var quizLength = $scope.quizQuestions.length - 1;
            while (!breakOut) {
                $scope.activeQuestion = $scope.activeQuestion < quizLength ? ++$scope.activeQuestion : 0;
                console.log($scope.activeQuestion);
                if ($scope.activeQuestion === 0) {
                    $scope.error = true;
                }
                if ($scope.arr[$scope.activeQuestion] == 5) {
                    breakOut = true;
                }
            }
        } else {
            console.log(index);
            console.log("vvcvcvcvcvcvcvcvcvcvcvcv");
            $scope.activeQuestion = index;
        }
    };
    $scope.previous = function () {
        $scope.activeQuestion = $scope.activeQuestion - 1;
        if ($scope.activeQuestion == -1) {
            $scope.activeQuestion = 0;
        }
    };
    $scope.next = function () {
        // if ($scope.activeQuestion == $scope.quizQuestions.length - 1) {
        //     console.log("you in last question");
        //     $scope.activeQuestion = $scope.quizQuestions.length - 2;
        // }
        var quizLength = $scope.quizQuestions.length;
        if ($scope.arr[$scope.activeQuestion] !== 5) {
            console.log("zxczxczxczxczxczxczxczxczxc" + $scope.numQuestionsAnswered);
            $scope.numQuestionsAnswered = $scope.numQuestionsAnswered + 1;
            console.log("numQuestionsAnswered " + $scope.numQuestionsAnswered);
            if ($scope.numQuestionsAnswered >= quizLength) {
                for (var i = 0; i < quizLength; i++) {
                    if ($scope.arr[i] === 5) {
                        console.log("array i" + $scope.arr[i]);
                        $scope.setActiveQuestion(i);
                        return;
                    }
                }
                $scope.error = false;
                console.log("finish");
                $scope.finalise = true;
                return;
            }
        }
        $scope.setActiveQuestion();
    };

    //for(var i=0;i<$scope.que)

    // [0, 1, 2].fill(5);
    //console.log($scope.arr);
    $scope.selectAnswer = function (index) {
        console.log("index " + index);
        var lengthQuiz = $scope.quizQuestions.length;
        console.log(lengthQuiz);
        $scope.arr[$scope.activeQuestion] = index;
        console.log($scope.arr);
    };
    $scope.done = function () {
        $scope.finalise = true;
    };
    $scope.finaliseAnswers = function () {
        console.log($scope.arr);
        dataQuestions.answeredQuestions($scope.arr);
        console.log("go to new state");
        $state.go("result");
    };

}]);
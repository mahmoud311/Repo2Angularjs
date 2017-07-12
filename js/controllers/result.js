appquiz.controller("resultCtrl", function ($scope, $state, dataQuestions) {
    $scope.activeQuestion = 0;
    console.log("result Ctrl");
    console.log(dataQuestions.getAnsweredQuestions());
    $scope.arr = [];
    $scope.arr = dataQuestions.getAnsweredQuestions();
    // markQu($scope.arr);
    dataQuestions.getDataQuiz().then(function (res) {
        if (!res) {
            $state.go("index");
        } else {
            $scope.quizQuestions = res;
            console.log(res);
        }
        markQuiz($scope.quizQuestions, $scope.arr);
    });
    $scope.setActiveQuestion = function ($index) {
        $scope.activeQuestion = $index;
    };
    $scope.getAnswerClass = function ($index) {
        if ($index === $scope.arr[$scope.activeQuestion].correctAns) {
            return "bg-success";
        } else if ($index !== $scope.arr[$scope.activeQuestion].correctAns) {
            return "bg-danger";
        }
    };
    function markQuiz(dataQuestions, dataAnswered) {
        console.log(dataQuestions);
        console.log(dataAnswered);
        $scope.numCorrect = 0;
        for (var i = 0; i < dataQuestions.length; i++) {
            if (dataAnswered[i] === dataQuestions[i].correctAns) {
                $scope.numCorrect++;
            }
        }
        $scope.calPerc = $scope.numCorrect / dataQuestions.length * 100;
    }
    $scope.previous = function () {
        $scope.activeQuestion = $scope.activeQuestion - 1;
        if ($scope.activeQuestion == -1) {
            $scope.activeQuestion = 0;
        }
        console.log($scope.activeQuestion);
    };
    $scope.next = function () {
        if ($scope.activeQuestion == $scope.quizQuestions.length - 1) {
            $scope.activeQuestion = $scope.quizQuestions.length - 2;
        }
        $scope.activeQuestion = $scope.activeQuestion + 1;
        console.log($scope.activeQuestion);
    };
    $scope.reset = function () {
        $state.go("index");
    }

}); 

appquiz.service("dataQuizzes", function ($http, $q, $state, httpService, msgBoxService) {
    var dataQuizzes = null;
    var getQuizzes = function () {
        var deferred = $q.defer();
        httpService.get('api/quizzes').then(function (res) {
            console.log(res);
            if (res) {
                dataQuizzes = res;
                deferred.resolve(res);
            } else {
                deferred.resolve(null);
            }
        })
        return deferred.promise;
    }
    var addQuiz = function (objectDataQuiz) {
        httpService.post('api/addQuiz', objectDataQuiz).then(function (res) {
            if (res) {
                msgBoxService.showSuccess("Add new Quiz", "Yes added new Quiz :)");
                console.log(res);                
            } else {
                msgBoxService.showError("new add new Quiz !!", "");
                console.log("not res");
            }
        });
    }
    // var addQuiz = function (objectDataQuiz) {
    //     $http({
    //         method: 'POST',
    //         url: 'http://localhost:3001/api/addQuiz',
    //         data: objectDataQuiz
    //     })
    //         .then(function (response) {
    //             console.log("goood add new quiz");
    //         });
    // }
    var addQuestion = function (objectDataQuestion) {
             httpService.post('api/questions', objectDataQuestion).then(function (res) {
            if (res) {
                msgBoxService.showSuccess("Add new question", "Yes added new question :)");
                console.log(res);                
            } else {
                msgBoxService.showError("new add new question !!", "");
                console.log("not res");
            }
        });
    }
    return {
        getQuizzes: getQuizzes,
        addQuestion: addQuestion,
        addQuiz: addQuiz
    }
});
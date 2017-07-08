appquiz.service("dataQuizzes", function ($http, $q, $state) {
    var dataQuizzes = null;
    var getQuizzes = function () {
        var deferred = $q.defer();
        if (dataQuizzes) {
            deferred.resolve(null);
        } else {
            $http.get('http://localhost:3001/api/quizzes').then(function (res) {
                if (res) {
                    dataQuizzes = res.data;
                    deferred.resolve(res.data);
                } else {
                    deferred.resolve(null);
                }
            })
        }
        return deferred.promise;
    }
    var addQuestion = function (objectDataQuestion) {
        $http({
            method: 'POST',
            url: 'http://localhost:3001/api/questions',
            data: objectDataQuestion
        })
            .then(function (response) {
                console.log("goood add new qustion");
            });
    }
    var addQuiz = function (objectDataQuiz) {
        $http({
            method: 'POST',
            url: 'http://localhost:3001/api/addQuiz',
            data: objectDataQuiz
        })
            .then(function (response) {
                console.log("goood add new quiz");
            });
    }
    return {
        getQuizzes: getQuizzes,
        addQuestion: addQuestion,
        addQuiz:addQuiz
    }
});
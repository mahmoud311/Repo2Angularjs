appquiz.service("dataQuestions", function ($http, $q, $state) {
    console.log("ccccc");
    var dataQuiz = null;
    var currentNum = null;
    var dataQuizzes = null;
    var saveDataAnswered = null;
    var getQuizzes = function () {
        var deferred = $q.defer();
        $http.get('http://localhost:3001/api/quizzes').then(function (res) {
            if (res) {
                dataQuizzes = res.data;
                deferred.resolve(res.data);
            } else {
                deferred.resolve(null);
            }
        })
        return deferred.promise;
    }
    var getDataQuiz = function (quizID) {
        var deferred = $q.defer();
        if (!currentNum && !quizID)
            deferred.resolve(null);
        else {
            if (dataQuiz && (currentNum == quizID || !quizID)) {
                deferred.resolve(dataQuiz);
            } else {
                currentNum = quizID;
                $http.get('http://localhost:3001/api/quizzes/' + quizID).then(function (res) {
                    if (res) {
                        dataQuiz = res.data.Question;
                        deferred.resolve(res.data.Question);
                    } else {
                        deferred.resolve(null);
                    }
                })
            }
        }
        return deferred.promise;
    }
    var answeredQuestions = function (qs) {
        console.log(qs);
        saveDataAnswered = qs;
    };

    var getAnsweredQuestions = function () {
        return saveDataAnswered;
    };

    return {
        getDataQuiz: getDataQuiz,
        answeredQuestions: answeredQuestions,
        getAnsweredQuestions: getAnsweredQuestions,
        getQuizzes: getQuizzes
    }
});
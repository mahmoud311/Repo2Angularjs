appquiz.service("dataQuizzes", function ($http, $q, $state,httpService) {
   var dataQuizzes = null;
    var getQuizzes = function () {
    //  var gg =  ;
    //    console.log(gg);
        var deferred = $q.defer();
        // if (dataQuizzes) {
        //     deferred.resolve(dataQuizzes);
        // } else {
           httpService.get('api/quizzes').then(function (res) {
               console.log(res);
                if (res) {
                    dataQuizzes = res;
                    deferred.resolve(res);
                } else {
                    deferred.resolve(null);
                }
            })
        // }
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
        addQuiz: addQuiz
    }
});
appquiz.controller("showOneQuizCtrl", ['$scope', '$state', '$stateParams', 'dataQuestions', 'msgBoxService', function ($scope, $state, $stateParams, dataQuestions, msgBoxService, $uibModal) {
    console.log("show one quiz Ctrl");

    $scope.more = 0;
    $scope.dataQ = [];

    dataQuestions.get5Question({
        id: null
    }).then(function (res) {
        if (res.length == 0) {
            msgBoxService.showError("About this quiz !!", "This quiz  doesn't  contain any questions"); ``
        } else {
            console.log(res);
            $scope.dataQ = $scope.dataQ.concat(res);
            msgBoxService.showSuccess("About this quiz !!", "This quiz contain questions");
        }
    });
    console.log($scope.dataQ.length);
    $scope.loadMore = function () {
        console.log($scope.dataQ[$scope.dataQ.length - 1]._id);
        var lsQuestion = {
            id: $scope.dataQ[$scope.dataQ.length - 1]._id
        };
        dataQuestions.get5Question(lsQuestion).then(function (res) {
            if (res) {
                if (res.length == 0) {
                    msgBoxService.showError("About this quiz !!", "This quiz  doesn't  contain any questions"); ``
                } else {
                    console.log(res);
                    console.log($scope.dataQ);
                    $scope.dataQ = $scope.dataQ.concat(res);
                    console.log($scope.dataQ);
                    msgBoxService.showSuccess("About this quiz !!", "This quiz contain questions");

                }
            }
        });
    }


}]);
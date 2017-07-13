appquiz.controller("showOneQuizCtrl", ['$scope', '$state', '$stateParams', 'dataQuestions', 'msgBoxService', function ($scope, $state, $stateParams, dataQuestions, msgBoxService, $uibModal) {
    console.log("show one quiz Ctrl");

    $scope.more = 0;
    $scope.dataQ = [];
    dataQuestions.get5Question({
        id: '5965dda28fa1b42a30d64b4c'}).then(function (res) {
        if (res.length == 0) {
            msgBoxService.showError("About this quiz !!", "This quiz  doesn't  contain any questions"); ``
        } else {
            console.log(res);
            $scope.dataQ = $scope.dataQ.concat(res);
            msgBoxService.showSuccess("About this quiz !!", "This quiz contain questions");
        }
    });

    $scope.loadMore = function () {
        console.log($scope.more = $scope.more + 5);
        var hh = {
            id: '5965dda28fa1b42a30d64b4c'
        };
        dataQuestions.get5Question(hh).then(function (res) {
            if (res.length == 0) {
                msgBoxService.showError("About this quiz !!", "This quiz  doesn't  contain any questions"); ``
            } else {
                console.log(res);
                // var children = hege.concat(stale);

                // for (var i = 0; i < res.length; i++) {
                //     $scope.dataQ.push(res.Question[i]);
                // }
                console.log($scope.dataQ);
                msgBoxService.showSuccess("About this quiz !!", "This quiz contain questions");

            }
        });
    }

}]);
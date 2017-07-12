appquiz.service('msgBoxService', ['toaster', '$uibModal', '$q', '$rootScope', '$filter', function (toaster, $uibModal, $q, $rootScope, $filter) {
    var toasterObj = {
        type: '',
        title: '',
        text: ''
    };

    var pop = function () {
        toaster.pop(toasterObj.type, toasterObj.title, toasterObj.text);
    };

    var showSuccess = function (title, msg) {
        toasterObj.type = 'success';
        toasterObj.title = title;
        toasterObj.text = msg;
        pop();
    }

    var showError = function (title, msg) {
        toasterObj.type = 'error';
        toasterObj.title = title;
        toasterObj.text = msg;
        pop();
    }

    var showInfo = function (title, msg) {
        toasterObj.type = 'info';
        toasterObj.title = title;
        toasterObj.text = msg;
        pop();
    }

    var showWait = function (title, msg) {
        toasterObj.type = 'wait';
        toasterObj.title = title;
        toasterObj.text = msg;
        pop();
    }
    var showWarning = function (title, msg) {
        toasterObj.type = 'warning';
        toasterObj.title = title;
        toasterObj.text = msg;
        pop();
    }

    var showMsg = function (title, msg, type) {
        toasterObj.type = type;
        toasterObj.title = title;
        toasterObj.text = msg;
        pop();
    }

    var showConfirm = function (title, msg, okText, cancelText) {
        var deferred = $q.defer();

        var $scope = $rootScope.$new();
        $scope.vm = {};
        $scope.vm.title = title;
        $scope.vm.message = msg;
        $scope.vm.okText = "ok || " || $filter('translate')('global.ok');
        $scope.vm.cancelText = cancelText || $filter('translate')('global.cancel');

        $scope.openModal = $uibModal.open({
            template: confirmTemplate,
            scope: $scope,
            size: 'md',
            backdrop: 'static',
            keyboard: false
        });

        $scope.modalCancel = function () {
            if ($scope.openModal)
                $scope.openModal.close();
            deferred.resolve(false);
        };

        $scope.modalOk = function () {
            if ($scope.openModal)
                $scope.openModal.close();
            deferred.resolve(true);
        };
        return deferred.promise;
    }

    var confirmTemplate = "<div class='modal-header ar-text-mid text-center'><h4 class='modal-title'>{{vm.title}} </h4></div><div class='modal-body ar-text'><p>{{vm.message}}</p></div><div class='modal-footer'>    <button type='button' ng-click='modalOk()' class='btn btn-primary' data-dismiss=''>{{vm.okText}}</button>    <button type='button' ng-click='modalCancel()' class='btn'>{{vm.cancelText}}</button></div>";

    return {
        showSuccess: showSuccess,
        showError: showError,
        showInfo: showInfo,
        showWait: showWait,
        showWarning: showWarning,
        showMsg: showMsg,
        showConfirm: showConfirm
    }
}]);
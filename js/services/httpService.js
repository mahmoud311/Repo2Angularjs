appquiz.factory('httpService', ['$rootScope', '$q', '$http', 'msgBoxService', '$window', '$filter', function ($rootScope, $q, $http, msgBoxService,$uibModal, $window, $filter) {

    var serverLink = "http://localhost:3001/";
    // var serverLink = "http://192.168.1.105:3000/";
    // var serverLink = "http://www.morshedco.net/";

    var getServerAddress = function () {
        return serverLink;
    }
    var post = function (serviceLink, data) {
        if (!data)
            var data = {};
        var deferred = $q.defer();
        // define the URL = serverlink + serviceLink
        // ex : http://localhost:3000/users/create
        var getlink = serverLink + serviceLink;
        $http.post(getlink, data).then(function (res) {
            if (res && res.status==200) {
                console.log("yessssssssssssssssssssssssssss add new");
                deferred.resolve(res);
            }
        });
        return deferred.promise;
    }
    var get = function (serviceLink, data) {
        if (!data)
            var data = {};
        var deferred = $q.defer();
        var connectionString = "";
        if (data) {
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    connectionString += key + "=" + data[key] + "&";
                }
            }
        }
        var getlink = serverLink + serviceLink + (connectionString ? "?" : "") + connectionString;
        $http.get(getlink).then(function (res) {
            if (res) {
                deferred.resolve(res.data);
            }
        });
        return deferred.promise;
    }
    return {
        post: post,
        get: get,
        getServerAddress: getServerAddress
    }
}]);
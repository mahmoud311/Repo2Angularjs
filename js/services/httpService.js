appquiz.factory('httpService', ['$rootScope', '$q', '$http', 'msgBoxService', '$window', '$filter', function ($rootScope, $q, $http, msgBoxService, $window, $filter) {

    var serverLink = "http://localhost:3001/";
    // var serverLink = "http://192.168.1.105:3000/";
    // var serverLink = "http://www.morshedco.net/";

    var getServerAddress = function () {
        return serverLink;
    }


    // var checkArray = ['password', 'name_on_the_card'];

    // var checkKeys = function (obj, link) {
    //     for (var i = 0; i < checkArray.length; i++) {
    //         if (checkKeysIterate(obj, checkArray[i])) {
    //             console.info(link);
    //             console.warn(checkArray[i] + " is In+++++++")
    //             console.log(obj);
    //         }
    //     }
    // }


    // var checkKeysIterate = function (obj, key) {
    //     var result;

    //     for (var property in obj) {
    //         if (obj.hasOwnProperty(property)) {
    //             // in case it is an object
    //             if (typeof obj[property] === "object") {
    //                 result = checkKeysIterate(obj[property], key);

    //                 if (typeof result !== "undefined") {
    //                     return result;
    //                 }
    //             } else if (property === key) {
    //                 return obj[key]; // returns the value
    //             }
    //         }
    //     }
    // }



    var post = function (serviceLink, data) {

        if (!data)
            var data = {};

        var deferred = $q.defer();
        // define the URL = serverlink + serviceLink
        // ex : http://localhost:3000/users/create
        var getlink = serverLink + serviceLink;



        $http.post(getlink, data).then(function (res) {
            // if (!exclude(getlink.substring(0, getlink.indexOf("?")))) {
            //     console.log(res.data);
            // }


            // checkKeys(res, getlink.substring(0, getlink.indexOf("?")));

            // if (res.status != 200) { //If http failed
            //     msgBoxService.showError($filter('translate')('global.conn_failed') + "!", $filter('translate')('global.check_internet_conn') + "!");
            //     deferred.resolve(null);
            //     return;
            // }


            if (res.data && !res.data.success) {
                var msg = res.data.msgText;
                if (msg) {
                    if (siteLang == 'ar' && res.data.msgText_ar) {
                        msg = res.data.msgText_ar;
                    }
                    msgBoxService.showError($filter('translate')('global.error'), msg);
                }

                deferred.resolve(null);

            } else {

                var msg = res.data.msgText;
                if (res && res.data.success && msg) {
                    if (siteLang == 'ar' && res.data.msgText_ar) {
                        msg = res.data.msgText_ar;
                    }
                    msgBoxService.showSuccess($filter('translate')('global.success'), msg);
                }

                deferred.resolve(res.data);
            }
        }).catch(function (err) {
            msgBoxService.showError($filter('translate')('global.conn_failed'), $filter('translate')('global.check_internet_conn') + "!");
            deferred.resolve(null);
        });

        return deferred.promise;
    }

    var get = function (serviceLink, data) {

        if (!data)
            var data = {};

        if ($window.localStorage.getItem('user-token')) {
            data.token = $window.localStorage.getItem('user-token');
        }

        var deferred = $q.defer();

        /*Receives data as JSON Object and convert it to query string*/

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
             if(res){   
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
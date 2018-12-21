myAngular.service('nwtestService', function ($http,$q) {
    this.getData = function () {
        var defer_data = $q.defer();
        $http({
            method:'GET',
            url:'https://api.jikan.moe/v3/manga/1/characters',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (result) {
            defer_data.resolve(result);
        },function (error) {
            defer_data.reject(error);
        })
        return defer_data.promise;
    }
})
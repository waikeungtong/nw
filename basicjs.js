var myAngular= angular.module('app', ['ui.bootstrap']);

myAngular.controller('nwtest', function($scope,$uibModal, $log, $document, $sce, nwtestService) {
    $scope.a ="test";
    $scope.passToModal={};
    $scope.passToModal.a="123321";
    $scope.filterTypeList =["name","mal_id", "url"];

    $scope.requstAll = function(){
        nwtestService.getData().then(function(result){
            $scope.people =result.data.characters;
            $scope.filteredPeople = $scope.people;
            console.log($scope.people[0].name)
        },function(error){
            console.log(error);
        })
    }
    $scope.doFilter= function(){
        $scope.filteredPeople=[];
        for(var i =0; i<$scope.people.length;i++){
            if($scope.people[i][$scope.filterType].toString().toLocaleLowerCase().includes($scope.filterValue.toLocaleLowerCase())){
                $scope.filteredPeople.push($scope.people[i]);
            }
        }
    }
    $scope.open= function(){
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'modalPage.html',
            controller: 'ModalInstanceCtrl',

            resolve: {
                passObj: function () {
                    return  $scope.passToModal;
                }
            }
        });

        modalInstance.result.then(function (closedObj) {
           alert("successful close, you return:" +closedObj.test);
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

});

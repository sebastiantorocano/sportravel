(function () {
    var app = angular.module("sportravel",  ['naif.base64']);
    app.controller('incriptionController', ['$scope', '$http', function ($scope, $http) {
        $scope.showError = false;
        $scope.error = "";
        $scope.showSuccess = false;
        $scope.success = "";
        $scope.cutsList = [];
        $scope.edit=0;

        console.log("D");

        
    }]);
})();
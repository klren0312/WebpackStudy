module.exports = function(ngModule) {

    ngModule.controller('myCtrl', function($scope) {
        $scope.text = "test templateUrl";
    })
    ngModule.directive('helloWorld', function() {
        return {
            restrict: 'E',
            // template: "<h1>why error</h1>",
            templateUrl: "app/helloWorld/helloWorld.html",
            replace: true
        };
    });

}
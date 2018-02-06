;(function () {
    'use strict';
    angular
        .module('yoApp')
        .controller('SeasonsCtrl', SeasonsCtrl);

    SeasonsCtrl.$inject = ['$scope', 'News', '$sce'];

    function SeasonsCtrl($scope, News, $sce) {
        var vm = $scope;

        vm.setUrl = setUrl;
        var foo = "";
        var string = "";

        function setUrl(foo) {
            string = $sce.trustAsResourceUrl(foo);
            return string;
        }


        var urls = [];

        vm.setUrl = function (value) {
            return $sce.trustAsResourceUrl(value);
        };


        vm.pushDomain = function (value) {
            urls.push({domain: $sce.trustAsResourceUrl(value)});
        };

        vm.deleteDomain = function (value) {
            urls.splice({domain: (value)});
        };


        $scope.urls = urls;

        vm.testAlert = function (value) {
            alert(value);
        };

        vm.myIndex = function () {
            var index = -1;
            index++;
            console.log(index);
        };
    }
})();

;(function () {
    'use strict';
    angular
        .module('yoApp')
        .controller('MediaCtrl', MediaCtrl);

    //all the stuff you want
    MediaCtrl.$inject = ['$scope', 'PhoTo', '$location'];

    function MediaCtrl($scope, PhoTo, $location) {
        //example
        var vm = $scope;


        vm.events = [
            {image: 'maybe2.jpg', description: 'Image 00', match: 'Tippecanoe', name: 'Tippecanoe'},
            {image: 'maybe4.jpg', description: 'Image 01', match: 'Perry', name: 'Perry'},
            {image: 'maybe3.jpg', description: 'Image 04', match: 'State', name: 'State'},
            {image: 'maybe6.jpg', description: 'Image 02', match: 'Worlds', name: 'Worlds'}
        ]

    }
})();

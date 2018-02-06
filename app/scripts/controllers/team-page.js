;(function () {
    'use strict';
    angular
        .module('yoApp')
        .controller('TeamPageCtrl', TeamPageCtrl);

    //all the stuff you want
    TeamPageCtrl.$inject = ['$scope', 'Movie', 'People', 'News'];

    function TeamPageCtrl($scope, Movie, People, News) {
        //example
        var vm = $scope;

        vm.movie = {};

        vm.saveMovie = saveMovie;

        function saveMovie() {
            Movie.post(vm.movie).then(function () {
                $location.path('/movies');
            });
        }
    }
})();

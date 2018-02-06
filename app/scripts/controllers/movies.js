;(function () {
    'use strict';
    angular
        .module('yoApp')
        .controller('MoviesCtrl', MoviesCtrl);

    MoviesCtrl.$inject = ['$scope', 'Movie'];

    function MoviesCtrl($scope, Movie) {
        var vm = $scope;

        // let movieObject = vm.movieObject;

        // vm.movieObject = Movie.getList().$object;

        console.log(movieObject);

        vm.mentors = [
            {image: 'sliderImage2.png', description: 'Image 00'},
            {image: 'slideImage1.jpg', description: 'Image 01'},
            {image: 'sliderImage3.png', description: 'Image 02'},
            {image: 'images/b2.jpg', description: 'Image 03'}
        ];

    }
})();

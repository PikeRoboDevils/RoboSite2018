;(function () {
    'use strict';
    angular
        .module('yoApp')
        .controller('MainCtrl', MainCtrl)
        .animation('.slide-left-animation', function ($window) {
            return {
                enter: function (element, done) {
                    TweenMax.fromTo(element, 1, {left: $window.innerWidth}, {
                        left: 0,
                        onComplete: done
                    });
                },
                leave: function (element, done) {
                    TweenMax.to(element, 1, {left: -$window.innerWidth, onComplete: done});
                }
            };
        });

    MainCtrl.$inject = ['$scope', '$interval'];

    function MainCtrl($scope, $interval) {
        var vm = $scope;

        vm.setCurrentSlideIndex = setCurrentSlideIndex;
        vm.isCurrentSlideIndex = isCurrentSlideIndex;
        vm.nextSlide = nextSlide;
        vm.callNext = callNext;
        var INTERVAL = 3000;

        vm.slides = [
            {image: 'slider1.png', description: 'Image 00'},
            {image: 'slider4.png', description: 'Image 01'},
            {image: 'eriel_lady.png', description: 'Image 03'},
            {image: 'slider3.png', description: 'Image 02'},
            {image: 'slider2.png', description: 'Image 04'}
        ];

        //index stuff continued
        vm.currentIndex = 0;
        vm.direction = 'left';
        setCurrentSlideIndex = function (index) {
            vm.currentIndex = index;
        };

        function setCurrentSlideIndex(index) {
            vm.direction = (index > vm.currentIndex) ? 'left' : 'right';
            vm.currentIndex = index;
        }

        function isCurrentSlideIndex(index) {
            return vm.currentIndex === index;
        }

        function callNext() {
            console.log(vm.currentIndex);
            vm.direction = 'left';
            vm.currentIndex = (vm.currentIndex < vm.slides.length - 1) ? ++vm.currentIndex : 0;
        }

        function nextSlide() {
            console.log(vm.currentIndex);
            $interval(callNext, 8000);
        }

        //===========animations========

        vm.setCurrentAnimation = setCurrentAnimation;
        vm.isCurrentAnimation = isCurrentAnimation;

        vm.currentAnimation = 'slide-left-animation';

        function setCurrentAnimation(animation) {
            vm.currentAnimation = animation;
        }

        function isCurrentAnimation(animation) {
            return vm.currentAnimation === animation;
        }

        vm.$on('$viewContentLoaded', function () {
            console.log(vm.currentIndex);
            $interval(callNext, 8000);
        })


    }
})();

// 'use strict';

// /**
//  * @ngdoc function
//  * @name yoApp.controller:MediaCtrl
//  * @description
//  * # MediaCtrl
//  * Controller of the yoApp
//  */
// angular.module('yoApp')
//   .controller('MediaCtrl', function () {
//     this.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   },);

(function() {
  'use strict';
  angular
    .module('yoApp')
    .controller('MediaCtrl', MediaCtrl);

    //all the stuff you want
  MediaCtrl.$inject = ['$scope', 'PhoTo', '$location'];

  function MediaCtrl($scope, PhoTo, $location){
  //example
    var vm = $scope;

    // vm.openModal = openModal;
    // vm.closeModal = closeModal;
    // vm.slideIndex = slideIndex;
    // vm.plusSlides = plusSlides;
    // vm.currentSlide = currentSlide;
    // vm.showSlides = showSlides;

    // vm.i = i;
    // vm.slides = slides;
    // vm.dots = dots;

 vm.events = [
        {image: 'maybe2.jpg', description: 'Image 00', match: 'Tippecanoe', name: 'Tippecanoe'},
        {image: 'maybe4.jpg', description: 'Image 01', match: 'Perry', name: 'Perry'},
        {image: 'maybe3.jpg', description: 'Image 04', match: 'State', name: 'State'},
        {image: 'maybe6.jpg', description: 'Image 02', match: 'Worlds', name: 'Worlds'}
    ]

    // vm.direction = direction;

    // var INTERVAL = 3000;
    
    // vm.slides = [
    // 	{image: 'sliderImage2.png', description: 'Image 00'},,
   	//     {image: 'slideImage1.jpg', description: 'Image 01'},,
    //     {image: 'space jam.jpg', description: 'Image 04'},,
    //     {image: 'sliderImage3.png', description: 'Image 02'},,
    //     {image: 'kobeeee.jpg', description: 'Image 03'},
    // ];




 //    function openModal() {
	//   document.getElementById('myModal').style.display = "block";
	// },

	// function closeModal() {
	//   document.getElementById('myModal').style.display = "none";
	// },

	// var slideIndex = 1;
	// showSlides(slideIndex);

	// function plusSlides(n) {
	//   showSlides(slideIndex += n);
	// },

	// function currentSlide(n) {
	//   showSlides(slideIndex = n);
	// },

	// function showSlides(n) {
	//   var i;
	//   var slides = document.getElementsByClassName("mySlides");
	//   var dots = document.getElementsByClassName("demo");
	//   var captionText = document.getElementById("caption");
	//   if (n > slides.length) {slideIndex = 1},
	//   if (n < 1) {slideIndex = slides.length},
	//   for (i = 0; i < slides.length; i++) {
	//       slides[i].style.display = "none";
	//   },
	//   for (i = 0; i < dots.length; i++) {
	//       dots[i].className = dots[i].className.replace(" active", "");
	//   },
	//   slides[slideIndex-1].style.display = "block";
	//   dots[slideIndex-1].className += " active";
	//   captionText.innerHTML = dots[slideIndex-1].alt;
	// },



  }
})();
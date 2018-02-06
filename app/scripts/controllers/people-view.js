'use strict';
angular.module('yoApp')
    .controller('PeopleViewCtrl', function ($scope, $routeParams, People) {
        $scope.viewPeople = true;
        // $scope.people = People.one($routeParams.id).get().$object;
    });

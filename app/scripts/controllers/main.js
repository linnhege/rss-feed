'use strict';

/**
 * @ngdoc function
 * @name rssFeedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rssFeedApp
 */
angular.module('rssFeedApp')
    .controller('MainCtrl', function ($scope) {
        $scope.todos = [];

        $scope.addTodo = function () {
            $scope.todos.push($scope.todo);
            $scope.todo = '';
        };

        $scope.removeTodo = function (index) {
            $scope.todos.splice(index, 1);
        };
    });

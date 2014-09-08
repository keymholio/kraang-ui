'use strict';

/**
 * @ngdoc function
 * @name kraangApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kraangApp
 */
angular.module('kraangApp')
  .controller('MainCtrl', function ($scope, translate) {

    $scope.talkKraang = function (sentence) {
      $scope.translating = true;
      translate.createSentence({ 'input_text': sentence })
      .then(function (response) {
        $scope.results = response.data;
        $scope.translating = false;
      });
    };

    $scope.reset = function () {
      $scope.results = null;
    };
  });

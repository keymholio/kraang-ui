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
      translate.createSentence({ 'input_text': sentence })
      .then(function (response) {
        $scope.results = response.data;
      });
    };
  });

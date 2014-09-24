'use strict';

/**
 * @ngdoc function
 * @name kraangApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kraangApp
 */

 /* global speechSynthesis, SpeechSynthesisUtterance */

angular.module('kraangApp')
  .controller('MainCtrl', function ($scope, translate) {

    $scope.consecutive = false;

    $scope.talkKraang = function (sentence, consecutive) {

      if (sentence) {
        $scope.translating = true;
        translate.createSentence({ 'input_text': sentence })
        .then(function (response) {
          $scope.results = response.data;

            window.speechSynthesis.onvoiceschanged = function() {
              $scope.speak(response.data.kraang);
            };

            if (consecutive) {
              $scope.speak(response.data.kraang);
            }

          $scope.translating = false;
        });
      }
    };

    $scope.speak = function (sentence) {
      if ('speechSynthesis' in window) {
        var u = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        u.voice = voices[33]; // Zarvox
        u.text = sentence.replace(/kraang/gi, 'krang');
        speechSynthesis.speak(u);
      }
    };

    $scope.again = function () {
      $scope.results = null;
      $scope.consecutive = true;
    };
  });

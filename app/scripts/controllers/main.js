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
      if (sentence) {
        $scope.translating = true;
        translate.createSentence({ 'input_text': sentence })
        .then(function (response) {
          $scope.results = response.data;

          /* jshint ignore:start */
          var speakSentence = response.data.kraang.replace(/kraang/gi, 'krang');
          meSpeak.loadConfig("/json/mespeak_config.json");
          meSpeak.loadVoice('/json/en-us.json');
          meSpeak.speak(speakSentence, { variant: 'm2', pitch: 30 });
          /* jshint ignore:end */
          $scope.translating = false;
        });
      }
    };

    $scope.reset = function () {
      $scope.results = null;
    };
  });

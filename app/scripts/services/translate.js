'use strict';

/**
 * @ngdoc service
 * @name kraangApp.translate
 * @description
 * # The translate service to get Kraang speak
 * Service in the kraangApp.
 */

angular.module('kraangApp')
    .service('translate', ['$http', function ($http) {

        var urlBase = 'https://keymholio-kraang-v1.p.mashape.com/translate/';

        this.createSentence = function (sentence) {
            $http.defaults.headers.post['X-Mashape-Key'] = '7So8KfU7SBmshBEwDbCwzVp99j9tp198udRjsn78julUpu823v';
            return $http.post(urlBase, sentence);
        };
    }]);

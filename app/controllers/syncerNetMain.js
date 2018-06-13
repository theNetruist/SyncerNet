(function () {
    'use strict';

    angular
        .module('app')
        .controller('syncerNetMain', [
            '$scope',
            '$rootScope',
            '$timeout',
            '$compile',
            function controller($scope, $rootScope, $timeout, $compile) {
                console.log('hit!');
                activate();
                function activate() {

                }
            }
        ]);
})();
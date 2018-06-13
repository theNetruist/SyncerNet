(function () {
    'use strict';

    angular
        .module('app', [
            'ui.router',
        ])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('main',
                    {
                        url: '/',
                        controller: 'syncerNetMain'
                    });
        }]);
})();
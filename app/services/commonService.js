(function () {
    'use strict';

    angular
        .module('app')
        .service('commonService', function service(/*$window*/) {
            this.makeId = function makeId(length) {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                for (var i = 0; i < (length || 12); i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                return text;
            }
        })
})();
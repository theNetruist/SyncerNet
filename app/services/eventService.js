(function () {
    'use strict';

    angular
        .module('app')
        .service('eventService', [function eventService() {
            this.event = (id) => {
                if (!this[id]) {
                    this[id] = new Event();
                }
                return this[id];
            }

            function Event() {
                let handlers = [];

                this.addHandler = (handler) => {
                    handlers.push(handler);
                    return this;
                }

                this.removeHandler = (handler) => {
                    let index = _.indexOf(handlers, handler);
                    if (index > -1) {
                        handlers.splice(index, 1);
                    }
                    return this;
                }

                this.raise = (data) => {
                    _.forEach(handlers, function (handler) {
                        handler(data);
                    });
                }
            }
        }]);
})();
var path = require('path');

//dependencies
require('jquery');
require('angular');
require('@uirouter/angularjs');
require('lodash');

//Modules
require(path.resolve('./app/syncerNetModule.js'));

//Services
require(path.resolve('./app/services/commonService.js'));
require(path.resolve('./app/services/elementService.js'));
require(path.resolve('./app/services/eventService.js'));
require(path.resolve('./app/services/modalService.js'));

//Controllers
require(path.resolve('./app/controllers/syncerNetMain.js'));
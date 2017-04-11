(function() {
  'use strict';

  angular
    .module('app.auth', [
      'ngAnimate', 'ngSanitize',
      'blocks.exception', 'blocks.logger', 'blocks.router',
      'ui.router', 'ngplus', 'ui.bootstrap'
    ]);
})();

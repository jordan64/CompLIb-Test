'use strict';

angular.module('tmp-components',[])
  .directive('vignetteView', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/vignette.html',
      replace: true
    };
  });

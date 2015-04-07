angular.module('compLibApp')
  .controller('DetailsController', function($scope, $routeParams) {
    $scope.vignetteId = $routeParams.vignetteId;

    $scope.vignettes = [
        {
          vignetteId: '0',
          name: 'Finance',
          image: '//placehold.it/1000x370/cccccc/FFFFFF.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
          vignetteId: '1',
          name: 'Finance 2',
          image: '//placehold.it/1000x370/cccccc/FFFFFF.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
          vignetteId: '2',
          name: 'Finance 3',
          image: '//placehold.it/1000x370/cccccc/FFFFFF.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
          vignetteId: '3',
          name: 'Economics',
          image: '//placehold.it/1000x370/cccccc/FFFFFF.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
          vignetteId: '4',
          name: 'Business Leadership',
          image: '//placehold.it/1000x370/cccccc/FFFFFF.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
          vignetteId: '5',
          name: 'Business Development',
          image: '../../images/Business-Development.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
          vignetteId: '6',
          name: 'Business Ethics',
          image: '//placehold.it/1000x370/cccccc/FFFFFF.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
          vignetteId: '7',
          name: 'Business Ethics 2',
          image: '//placehold.it/1000x370/cccccc/FFFFFF.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
          vignetteId: '8',
          name: 'Business Ethics 3',
          image: '//placehold.it/1000x370/cccccc/FFFFFF.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        }
      ];

  });

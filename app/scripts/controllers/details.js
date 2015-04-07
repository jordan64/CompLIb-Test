angular.module('compLibApp')
  .controller('DetailsController', function($scope, $routeParams) {
    $scope.vignetteId = $routeParams.vignetteId;

    $scope.vignettes = [
        {
          vignetteId: '0',
          name: 'Finance',
          thumb: '//placehold.it/300x200/cccccc/FFFFFF.png',
          image: '//placehold.it/1000x370/cccccc/FFFFFF.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          longDesc: 'The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother\'s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother\'s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.',
          rating: '1 out of 10',
          specs: {
            application: 'business',
            difficulty: 'moderate',
            relatedResources: 'capsim.com',
            price: '50.99',
            contributor: 'Prof. Novak'
          }
        },
        {
          vignetteId: '1',
          name: 'Finance 2',
          thumb: '//placehold.it/300x200/cccccc/FFFFFF.png',
          image: '//placehold.it/1000x370/cccccc/FFFFFF.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          longDesc: 'The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother\'s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother\'s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.',
          rating: '3 out of 10',
          specs: {
            application: 'business',
            difficulty: 'moderate',
            relatedResources: 'capsim.com',
            price: '50.99',
            contributor: 'Prof. Novak'
          }
        },
        {
          vignetteId: '2',
          name: 'Finance 3',
          thumb: '//placehold.it/300x200/cccccc/FFFFFF.png',
          image: '//placehold.it/1000x370/cccccc/FFFFFF.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          longDesc: 'The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother\'s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother\'s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.',
          rating: '5 out of 10',
          specs: {
            application: 'business',
            difficulty: 'moderate',
            relatedResources: 'capsim.com',
            price: '50.99',
            contributor: 'Prof. Novak'
          }
        },
        {
          vignetteId: '3',
          name: 'Economics',
          thumb: '//placehold.it/300x200/cccccc/FFFFFF.png',
          image: '//placehold.it/1000x370/cccccc/FFFFFF.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          longDesc: 'The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother\'s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother\'s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.',
          rating: '6 out of 10',
          specs: {
            application: 'business',
            difficulty: 'moderate',
            relatedResources: 'capsim.com',
            price: '50.99',
            contributor: 'Prof. Novak'
          }
        },
        {
          vignetteId: '4',
          name: 'Business Leadership',
          thumb: '//placehold.it/300x200/cccccc/FFFFFF.png',
          image: '//placehold.it/1000x370/cccccc/FFFFFF.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          longDesc: 'The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother\'s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother\'s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.',
          rating: '5 out of 10',
          specs: {
            application: 'business',
            difficulty: 'moderate',
            relatedResources: 'capsim.com',
            price: '50.99',
            contributor: 'Prof. Novak'
          }
        },
        {
          vignetteId: '5',
          name: 'Business Development',
          thumb: '//placehold.it/300x200/cccccc/FFFFFF.png',
          image: '../../images/Business-Development.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          longDesc: 'The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother\'s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother\'s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.',
          rating: '9 out of 10',
          specs: {
            application: 'business',
            difficulty: 'moderate',
            relatedResources: 'capsim.com',
            price: '50.99',
            contributor: 'Prof. Novak'
          }
        },
        {
          vignetteId: '6',
          name: 'Business Ethics',
          thumb: '//placehold.it/300x200/cccccc/FFFFFF.png',
          image: '//placehold.it/1000x370/cccccc/FFFFFF.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          longDesc: 'The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother\'s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother\'s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.',
          rating: '4 out of 10',
          specs: {
            application: 'business',
            difficulty: 'moderate',
            relatedResources: 'capsim.com',
            price: '50.99',
            contributor: 'Prof. Novak'
          }
        },
        {
          vignetteId: '7',
          name: 'Business Ethics 2',
          thumb: '//placehold.it/300x200/cccccc/FFFFFF.png',
          image: '//placehold.it/1000x370/cccccc/FFFFFF.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          longDesc: 'The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother\'s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother\'s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.',
          rating: '7 out of 10',
          specs: {
            application: 'business',
            difficulty: 'moderate',
            relatedResources: 'capsim.com',
            price: '50.99',
            contributor: 'Prof. Novak'
          }
        },
        {
          vignetteId: '8',
          name: 'Business Ethics 3',
          thumb: '//placehold.it/300x200/cccccc/FFFFFF.png',
          image: '//placehold.it/1000x370/cccccc/FFFFFF.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          longDesc: 'The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother\'s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother\'s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.',
          rating: '5 out of 10',
          specs: {
            application: 'business',
            difficulty: 'moderate',
            relatedResources: 'capsim.com',
            price: '50.99',
            contributor: 'Prof. Novak'
          }
        }
      ];

  });

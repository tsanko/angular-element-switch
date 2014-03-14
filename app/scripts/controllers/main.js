'use strict';

angular.module('angularjsElementSwitchApp')
    .controller('MainCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.switchState1 = 'off';
        $scope.switchState2 = 'off';
        $scope.switchStyleButton = 'button';
        $scope.switchStyleSlider = 'slider';
    });

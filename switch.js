    .directive('mySwitch', function () {

		'use strict';

        return {
            restrict: 'A',
            replace: true,
            template: '<div class="my-switch {{ switchClass }}">' +
                        '<div class="switch">{{ switchText }}</div>' +
                      '</div>',
            scope: {
                switchState: '='
            },
            link: function (scope, element, attrs) {

                function safeApply(scope, fn) {
                    return (scope.$$phase || scope.$root.$$phase) ? fn() : scope.$apply(fn);
                }

                var divSwitch = element.find('div');

                divSwitch.on('click', function(event) {
                    event.preventDefault();

                    safeApply(scope, function () {
                        scope.switchState = (scope.switchState === 'off') ? 'on' : 'off';
                        scope.switchClass = (scope.switchState === 'off') ? '-off' : '-on';
                        scope.switchText = (scope.switchState === 'off') ? 'off' : 'on';
                    });
                });

                scope.switchText = (scope.switchState === 'off') ? 'off' : 'on';
                scope.switchClass = (scope.switchState === 'off') ? '-off' : '-on';

            }
        };
    });

(function() {
    "use strict";

    angular.module('myTodo', [
        "ui.router",
        "ngMaterial"
    ]).config(["$mdThemingProvider",function($mdThemingProvider) {

        //Config theme from Material Design
        $mdThemingProvider.theme('default')
            .primaryPalette('light-blue')
            .accentPalette('pink');
    }]);

})();
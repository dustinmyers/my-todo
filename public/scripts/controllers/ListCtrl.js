(function() {
    "use strict";

    function ListCtrl() {
        var $ctrl = this;

        console.log("ctrl here");
        $ctrl.test = "hey there boi!";

    }//end controller

    //Injection array for minification

    angular
        .module("myTodo")
        .controller("ListCtrl", ListCtrl);

})();
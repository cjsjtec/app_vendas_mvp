angular.module('appVendas').directive('trigger', function () {
  return {

    strict: "A",
    scope: {
      trigger: '='
    },
    link: function (scope, element, attrs, ctrl) {
      element.bind('click', function () {
        document.getElementById(scope.trigger.elementId).click();
      });
    }

  }
});
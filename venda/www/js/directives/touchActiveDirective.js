angular.module('appVendas').directive("touchActive", function () {
  return {
    strict: "A",
    link: function (scope, element, attrs, ctrl) {
      element.bind("touchstart", function() {
        this.classList.add("active");
      });
      element.bind("touchend", function () {
        this.classList.remove("active");
      });
    }
  };
});
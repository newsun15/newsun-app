angular.module('starter.controllers', [])

.controller('MainCtrl', function ($scope, ClockService, $interval) {

  var bottom = 61.71875;
  var top = 32.421875;

  var blend = function (ratio) {
    return top * ratio + bottom * (1.0 - ratio);
  };

  var t = 0;
  var end = 100;


Math.easeOutQuad = function (t, b, c, d) {
  t /= d;
  return -c * t*(t-2) + b;
};

  var start = false;
  var delta = 1;
  $scope.go = function () {
    if (start) {
      delta = -1;
    }
    start = true;
  }

  $interval(function () {
    $scope.hour = '07';
    $scope.min = '47';
    ratio = Math.easeOutQuad(t, 0, 1, 100);
    $scope.sunStyle = {
      top: blend(ratio) + 'vh'
    };

    $scope.downStyle = 0.5 - Math.easeOutQuad(t, 0, 0.5, 100);
    $scope.upStyle = 0.6 - Math.easeOutQuad(t, 0, 0.6, 100);

    if (start) {
      t += delta;
    }
    if (t < 0) {
      t = 0;
      start = false;
      delta = 1;
    }
    if (t > 100) {
      t = 100;
    }
  }, 16);
})

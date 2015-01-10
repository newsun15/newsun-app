angular.module('starter.services', [])

.factory('ClockService', function () {
  var riseTime = function () {
    return moment('2014-01-09 19:47');
  };
  var currentTime = function () {
    return moment();
  };
  var duration = function () {
    return '2분'
  };
  var ratio = function () {
    return (riseTime() - currentTime()) / duration();
  };
  return {
    riseTime: riseTime,
    currentTime: currentTime,
    duration: duration,
    ratio: ratio
  };
})

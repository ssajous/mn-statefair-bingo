'use strict';

angular.module('mnStatefairBingoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('play', {
        url: '/game/play',
        templateUrl: 'app/play/play.html',
        controller: 'PlayCtrl as play'
      });
  });
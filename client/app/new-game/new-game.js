'use strict';

angular.module('mnStatefairBingoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('new-game', {
        url: '/game/new',
        templateUrl: 'app/new-game/new-game.html',
        controller: 'NewGameCtrl as game',
        authenticate: true
      });
  });
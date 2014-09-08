'use strict';

angular.module('mnStatefairBingoApp')
  .controller('NewGameCtrl', function ($scope, Auth) {
    this.owner = '';

    this.create = angular.bind(this, function() {
      var currentUser = Auth.getCurrentUser();
      this.owner = currentUser.email;
    });
  });

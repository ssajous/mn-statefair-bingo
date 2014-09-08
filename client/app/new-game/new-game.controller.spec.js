'use strict';

describe('Controller: NewGameCtrl', function () {

  // load the controller's module
  beforeEach(module('mnStatefairBingoApp'));

  var NewGameCtrl, scope, auth;
  auth = jasmine.createSpyObj('Auth', ['getCurrentUser']);

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewGameCtrl = $controller('NewGameCtrl', {
      $scope: scope,
      Auth: auth
    });
  }));

  it("should create a game with the current user's Id as the owner" , function () {
    NewGameCtrl.name = "Test Game";
    NewGameCtrl.create();

    // TODO: More assertions for the created game. Through Spies most likely.
  });
});

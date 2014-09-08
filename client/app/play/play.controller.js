'use strict';

angular.module('mnStatefairBingoApp')
  .controller('PlayCtrl', function ($scope) {

    this.squares = [
      [
        "Man wearing overalls with no shirt",
        "Camel toe and/or moose knuckle",
        "Clogging",
        "Someone Falling",
        "Someone using an electric card who clearly doesn't need to be"
      ],
      [
        "Spotted Cow",
        "Turkey",
        "Over the top douchbag",
        "Butterhead sculpture",
        "Goat"
      ],
      [
        "Mullet",
        "500+ lb pumpkin",
        "Free Space",
        "Broken Carnival Ride",
        "Child on a leash"
      ],
      [
        "Double fisting corndogs",
        "Jason Derusha",
        "Bejewled and/or sequined baseball hat",
        "Farm boy/girl that is way too close with their animal(s)",
        "Fried candy bar stand"
      ],
      [
        "Cut off jean shorts",
        "Way too overdressed girl/lady",
        "Sheep in spandex",
        "Crop art",
        "Mascot and/or furry"
      ]
    ];

    this.isFreeSquare = angular.bind(this, function(text) {
      if (text === "Free Space") {
        return "free-space";
      }

      return "";
    });
  });


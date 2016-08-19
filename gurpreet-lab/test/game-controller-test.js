'use strict';

describe('testing GameController', function(){

  beforeEach(() =>{
    angular.mock.module('demoApp');
    angular.mock.inject(($controller) => {
      this.gameCtrl = $controller('GameController');
    });
  });

  beforeEach(() => {
    this.gameCtrl.history = [];
    this.gameCtrl.player = {
      name: 'slug',
      location: 'roomD',
    };
  });

  it('the player should change locations', () => {
    this.gameCtrl.moveDirection('east');
    expect(this.gameCtrl.player.location).toBe('roomD');
  });


});

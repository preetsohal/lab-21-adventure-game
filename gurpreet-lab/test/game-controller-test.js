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
      location: 'roomB'
      // BackPack: ['Diamond']
    };
  });

  it('the player should change locations', () => {
    this.gameCtrl.moveDirection('east');
    expect(this.gameCtrl.player.location).toBe('roomB');
    expect(this.gameCtrl.history[0].text).toContain('you have entered the roomB');
    expect(this.ganeCtrl.history[0].text).toContain('prize?');
  });

  it('the palyer should hit wall', () => {
    this.gameCtrl.moveDirection('north');
    // expect(this.gameCtrl.player.location).toBe('roomD');
    expect(this.gameCtrl.history[0].text).toBe('you hit the wall');
    expect(this.ganeCtrl.history[0].text).not.toContain('prize?');
  });
});

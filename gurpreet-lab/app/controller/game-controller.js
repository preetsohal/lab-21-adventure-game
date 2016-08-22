'use strict';

const angular= require('angular');
const demoApp = angular.module('demoApp');

demoApp.controller('GameController', ['$log', GameController]);

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function GameController($log){
  this.history =[{ id: 0, text: 'you are on a gooy adventure'}];
  this.directions = ['north', 'south', 'east', 'west'];
  this.prize = ['Bronze', 'Ruby', 'gold', 'Diamond'];
  this.player = {
    name: 'percilla',
    hp: 100,
    location: 'roomA',
  };

  this.map = require('../lib/map.js');

  this.addItemToBackpack = function(number){
    if (number < 6){
      let newPrize = this.prize.pop();
      this.player.backpack.push(newPrize);
      return 'Prize? Yes! You got a ' + newPrize;
    }
    else return 'Prize? No! No candy for you!';
  };

  this.moveDirection = function(direction){
    $log.debug('gameCtrl.moveDirection');
    console.log(this.player);
    if (this.map[this.player.location]){
      let currentLocation = this.map[this.player.location];
      $log.log('currentLocation', currentLocation);
      let nextRoom = currentLocation[direction];
      $log.log('nextRoom', nextRoom);
      if( nextRoom !== 'wall') {
        this.player.location = nextRoom;
        this.logHistory('you have entered' + this.player.location + '. ' + this.addItemToBackpack(getRandomNumber(1, 10)));
        return;
      }
      this.logHistory('you hit the wall');
    }
  };
  this.logHistory = function(info){
    this.history.push({id: this.history.length, text:`${this.player.name}, ${info}`});
  };
}

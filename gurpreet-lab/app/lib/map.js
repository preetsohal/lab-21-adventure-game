'use strict';

module.exports = {
  reoomA: {
    north: 'wall',
    east: 'roomB',
    south: 'rommC',
    west: 'wall',
  },
  reoomB: {
    north: 'wall',
    east: 'wall',
    south: 'rommD',
    west: 'reoomA',
  },
  reoomC: {
    north: 'roomA',
    east: 'roomD',
    south: 'wall',
    west: 'wall',
  },
  reoomD: {
    north: 'roomB',
    east: 'wall',
    south: 'wall',
    west: 'roomC',
  },
}

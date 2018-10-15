import * as types from '../constants/ActionTypes';
import {getNumbers} from '../../services/utils';

export function startGame () {
  var tiles = getNumbers()
  console.log('test----->>>',tiles);
  return {
    type: types.START_GAME,
    tiles
  }
}

export function flipTile(index, tile) {
  return {
    type: types.FLIP_TILE,
    index,
    tile
  }
}

export function toggleIsWaiting(isWaiting)  {
  return {
    type: types.TOGGLE_IS_WAITING,
    isWaiting
  }
}

export function incrementTries()  {
  return {
    type: types.INCREMENT_TRIES
  }
}

export function matchCheck (flippedTiles) {
  return {
    type: types.MATCH_CHECK,
    flippedTiles
  }
}



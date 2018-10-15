import _ from 'lodash';

var _tiles = [];
var _numbers = [];

// function generateTiles() {
const generateNumbers = () => {
  _tiles = [];
  _numbers = []
  let numbers = [];

  for (let i = 1; i < 9; i++) {
    numbers.push(
      {
        number: i,
        flipped: false,
        matched: false
      });
  }

  _numbers = _.shuffle(_.concat(numbers, numbers));

}


// function getTiles() {
const getNumbers = () => {
  generateNumbers();
  return _numbers;
}

export { getNumbers }




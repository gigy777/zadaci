var list = [];
var intervals = {};
var is0 = {};

function rechargeTime(health) {
  return (1000 * health) / 100;
}

function canAttack(numbers) {
  if (list[numbers[1]].health > 0) {
    return true;
  } else {
    return false;
  }
}

function damage(health) {
  return health / 100;
}

function criticalChance(health) {
  return 10 - health / 10;
}

function randomNum(min, max) {
  var n = [];
  for (var i = 0; i < 2; i++) {
    n.push(Math.floor(Math.random() * max) + min);
  }
  if (n[0] == n[1]) {
    if (n[0] == 0) {
      n[0] = 1;
    } else if (n[0] == 5) {
      n[0] = 4;
    } else {
      n[0] = n[0] - 1;
    }

    return n;
  } else {
    return n;
  }
}

function randomNumWithFirstValue(min, max, number) {
  newNumber = Math.floor(Math.random() * max) + min;
  if (number === newNumber) {
    return randomNumWithFirstValue(min, max, number);
  } else {
    return newNumber;
  }
}
function attack(number) {
  if (intervals[number] == null) {
    intervals[number] = setInterval(() => {
      if (isStop()) {
        console.log("game over");
        intervals={};
        return;
      }
      var numbers = [number, randomNumWithFirstValue(0, 5, number)];
      if (canAttack(numbers)) {
        console.log(numbers[0] + "-attack-" + numbers[1]);
        list[numbers[1]].health =
          Number(list[numbers[1]].health) - Number(list[numbers[1]].damage) < 0
            ? 0
            : Number(list[numbers[1]].health) - Number(list[numbers[1]].damage);
        list[numbers[1]].damage = damage(Number(list[numbers[1]].health));
        console.log(numbers[1],list[numbers[1]].health);
        intervals[number] = null;
      }
    }, rechargeTime(list[number].health));
  }
}

function isStop() {
  list.find(l => {
    return (l.health == 0 || l.health <0);
  });
  if (list.length < 3) {
    return true;
  } else {
    return false;
  }
}

for (var x = 0; x <= 5; x++) {
  list.push({
    name: x,
    health: 100,
    rechargeTime: rechargeTime(100),
    damage: damage(100),
    criticalChance: criticalChance(100)
  });
  intervals[x] = null;
}

for (var x = 0; x <= 5; x++) {
  attack(x);
}

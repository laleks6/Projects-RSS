// creat block

const { body } = document;

// header
const header = document.createElement('header');
header.className = 'header';
const logo = document.createElement('h1');
logo.className = 'logo';
header.prepend(logo);

// main
const flagImg = './assets/img/flag.png';

const main = document.createElement('main');
main.className = 'main';

const wrap = document.createElement('div');
wrap.className = 'wrap';

const mineSwiperBlock = document.createElement('div');
mineSwiperBlock.className = 'minesweeper-block';

const gameBifficulty = document.createElement('div');
gameBifficulty.className = 'minesweeper-block__game-difficulty';

const easy = document.createElement('button');
easy.className = 'game-difficulty__easy-btn change-field-btn';
easy.textContent = 'easy';
const normal = document.createElement('button');
normal.className = 'game-difficulty__normal-btn change-field-btn';
normal.textContent = 'normal';
const hard = document.createElement('button');
hard.className = 'game-difficulty__hard-btn change-field-btn';
hard.textContent = 'hard';

const informationBlock = document.createElement('div');
informationBlock.className = 'minesweeper-block__information';

const reboot = document.createElement('div');
reboot.className = 'reboot-btn';
reboot.textContent = 'reboot';

const informationFlagCount = document.createElement('div');
informationFlagCount.className = 'information__flag';

const numberBombs = document.createElement('div');
numberBombs.className = 'information__nomber-bomb';
const labelNumberBombs = document.createElement('label');
labelNumberBombs.for = 'bombs';
const inputNumberBombs = document.createElement('input');
inputNumberBombs.type = 'number';
inputNumberBombs.value = '10';
inputNumberBombs.id = 'bombs';
inputNumberBombs.name = 'bombs';
inputNumberBombs.min = '10';
inputNumberBombs.max = '99';

const informationLogo = document.createElement('div');
informationLogo.textContent = 'logo';
informationLogo.className = 'information__logo';

const informationTime = document.createElement('div');
informationTime.textContent = '00:00';
informationTime.className = 'information__timer';

informationBlock.append(reboot);
informationBlock.append(gameBifficulty);
gameBifficulty.append(easy);
gameBifficulty.append(normal);
gameBifficulty.append(hard);
informationBlock.append(informationFlagCount);
informationBlock.append(numberBombs);
numberBombs.append(labelNumberBombs);
numberBombs.append(inputNumberBombs);
informationBlock.append(informationLogo);
informationBlock.append(informationTime);

const playingFieldBlock = document.createElement('div');
playingFieldBlock.className = 'minesweeper-block__playing-field';

main.prepend(wrap);
wrap.prepend(mineSwiperBlock);
mineSwiperBlock.append(informationBlock);
mineSwiperBlock.append(playingFieldBlock);

body.prepend(main);
body.prepend(header);

const playingField = document.querySelector('.minesweeper-block__playing-field');

let quantityCells = 10;
let countSecond = 0;
let countMinutes = 0;
let interval; // что чтобы интервал работал нужно выносить параметр в глобальную видимость

// создание кнопок
const creatBtn = (value) => {
  playingFieldBlock.classList.remove('active-game');
  const quantityValue = +value;
  let x = 0;
  let y = 0;
  informationFlagCount.textContent = inputNumberBombs.value;
  if (quantityValue === 10) {
    playingField.classList.remove('game-over');
    playingFieldBlock.classList.remove('grid-btn-normal');
    playingFieldBlock.classList.remove('grid-btn-hard');
    playingFieldBlock.classList.add('grid-btn-easy');
  } else if (quantityValue === 15) {
    playingField.classList.remove('game-over');
    playingFieldBlock.classList.remove('grid-btn-easy');
    playingFieldBlock.classList.remove('grid-btn-hard');
    playingFieldBlock.classList.add('grid-btn-normal');
  } else if (quantityValue === 25) {
    playingField.classList.remove('game-over');
    playingFieldBlock.classList.remove('grid-btn-easy');
    playingFieldBlock.classList.remove('grid-btn-normal');
    playingFieldBlock.classList.add('grid-btn-hard');
  }
  for (let i = 0; i < quantityValue * quantityValue; i += 1) {
    const btn = document.createElement('button');
    btn.className = 'btn number';
    btn.id = i;
    if (x >= quantityValue) {
      x = 0;
      y += 1;
    }
    btn.dataset.x = x;
    btn.dataset.y = y;
    x += 1;
    playingFieldBlock.append(btn);
  }
};
creatBtn(quantityCells);

const winner = () => {

};
const loose = () => {

};

const deleteBtn = () => {
  const btn = document.getElementsByClassName('btn');
  Array.from(btn).forEach((el) => {
    el.remove();
  });
};
function timeOut() {
  countSecond += 1;
  if (countSecond < 10) {
    informationTime.textContent = `0${countMinutes}:0${countSecond}`;
  } else if (countSecond >= 10 && countSecond < 60) {
    informationTime.textContent = `0${countMinutes}:${countSecond}`;
  } else if (countSecond >= 60) {
    countSecond = 0;
    countMinutes += 1;
    informationTime.textContent = `0${countMinutes}:${countSecond}`;
  }
  if (countMinutes >= 10) {
    informationTime.textContent = `${countMinutes}:${countSecond}`;
  }
}
function timerOff(el) {
  let intervalValue = el;
  intervalValue = clearInterval(intervalValue); // приостановка setInterval
  informationTime.classList.toggle('active--timer');
  return intervalValue;
}
function time(el) {
  if (!informationTime.classList.contains('active--timer')) {
    interval = setInterval(timeOut, 1000);
    informationTime.classList.toggle('active--timer');
  }
  if (el.target.classList.contains('bomb')) {
    timerOff(interval);
  }
  if (el.target.classList.contains('reboot-btn') || el.target.classList.contains('change-field-btn')) {
    timerOff(interval);
    informationTime.textContent = '00:00';
    countSecond = 0;
    countMinutes = 0;
  }
}

// рандомные цыфры запушенные в массив
function rundomNumver(quantityValue, arrayValue, el) {
  const quantity = quantityValue;
  const array = arrayValue;
  for (let i = 0; i < quantity * quantity; i += 1) {
    if (+el.id !== +i) {
      array.push(i);
    }
  }
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// добавленияе класса для рандомных значений в массиве
let a;
function addClassBomb(array, arrBtn) {
  const quantityBomb = inputNumberBombs.value;
  for (let i = 0; i < array.slice(0, quantityBomb).length; i += 1) {
    const btn = arrBtn[array[i]];
    btn.classList.add('bomb');
    btn.classList.remove('number');
  }
}
const arrNumber = [];
const addNumberId = (arrBtn) => {
  Array.from(arrBtn).forEach((el) => {
    if (el.classList.contains('number') && !el.classList.contains('btn--unlock')) {
      arrNumber.push(el.id);
    }
  });
};

// делаем проверка начала игры, если это новая игра то добавляем рандомные бомбы
function startGame(arrBtn, array, el) {
  if (!playingField.classList.contains('active-game')) {
    playingField.classList.toggle('active-game');
    rundomNumver(quantityCells, array, el);
    addClassBomb(array, arrBtn);
    addNumberId(arrBtn);
  }
}

// функция нахождение бомбы
function findingBomb(x, y, el, quantity) {
  const arrBtn = document.getElementsByClassName('btn');
  const arr = [...arrBtn][+y * +quantity + +x];
  if (x >= 0 && y >= 0 && y < quantity && x < quantity) {
    if (arr.classList.contains('bomb')) {
      return true;
    }
    return false;
  }
  return '';
}

// подсчет бомб вокруг клетки
function bombCount(el, quantity, x, y) {
  let count = 0;
  for (let i = -1; i <= 1; i += 1) {
    for (let k = -1; k <= 1; k += 1) {
      if (findingBomb(+x + i, +y + k, el, quantity)) {
        count += 1;
      }
    }
  }
  return count;
}

// считает количество не открытых обычных ячеек, и когда они все открыты завершает игру
const countNumber = (el) => {
  const element = el;
  // arrNumber.slice(arrNumber.indexOf(element.id), 1);
  console.log(arrNumber.splice(arrNumber.indexOf(element.id) - 1, 1));
  console.log(`${arrNumber.length}==== длина строки`);
  console.log(arrNumber);
  if (arrNumber.length === 0) {
    playingField.classList.remove('active-game');
    playingField.classList.add('game-over');
  }
};
// при клике на бомбу открывает все бомбы и завершает игру
const clickBomb = (el) => {
  const element = el;
  element.style.backgroundColor = 'red';
  const btnBombs = document.getElementsByClassName('bomb');
  Array.from(btnBombs).forEach((e) => {
    e.classList.add('btn-img-bomb');
    e.classList.add('btn--unlock');
  });
  playingField.classList.remove('active-game');
  playingField.classList.add('game-over');
};
// добавляет флаг
let countFlag = 0;
const addFlag = (element) => {
  countFlag = +informationFlagCount.textContent;
  const el = element;
  if (el.target.classList.contains('btn') && !el.target.classList.contains('btn--unlock') && playingField.classList.contains('active-game')) {
    if (el.button === 2) {
      if (!el.target.classList.contains('flag')) {
        countFlag -= 1;
        informationFlagCount.textContent = countFlag;
        console.log('нажал на правую кнопку');
        //el.target.innerHtml = flagImg;
        el.target.classList.toggle('flag');
      } else {
        countFlag += 1;
        informationFlagCount.textContent = countFlag;
        el.target.textContent = '';
        el.target.classList.toggle('flag');
      }
    }
  }
};
// удаляет флаг при открытии пустых клеток если он поставлен на обычную клетку
const removeFlag = (el) => {
  const element = el;
  if (element.classList.contains('flag')) {
    countFlag += 1;
    informationFlagCount.textContent = countFlag;
    element.classList.toggle('flag');
  }
};
// функция сборщик всего функционала по кноакам
function buttonAssembly(quantityValue, elValue, x, y) {
  const arrBtn = document.getElementsByClassName('btn');
  const array = [];
  let el = elValue;
  // el = arrBtn[+`${y}${x}`];
  el = arrBtn[+y * +quantityValue + +x];
  if (x >= 0 && y >= 0 && y < quantityValue && x < quantityValue) {
    if (!el.classList.contains('btn--unlock')) {
      startGame(arrBtn, array, el);
      el.classList.add('btn--unlock');
      el.textContent = ' ';
      if (el.classList.contains('bomb')) {
        clickBomb(el);
      } else {
        const count = bombCount(el, quantityValue, +x, +y);
        removeFlag(el);
        countNumber(el);
        if (count === 0) {
          for (let i = -1; i <= 1; i += 1) {
            for (let k = -1; k <= 1; k += 1) {
              buttonAssembly(quantityValue, el, +x + i, +y + k);
            }
          }
        } else {
          el.textContent = count;
          // добавление нужного класса цвета для цифры
          el.classList.add(`btn--number-color-${count}`);
          return '';
        }
      }
    }
  }

  return '';
}

const validationInput = () => {
  let valid = true;
  if (!playingField.classList.contains('active-game')) {
    numberBombs.classList.remove('error-validation-input');
    if (inputNumberBombs.validity.rangeOverflow) {
    // alert('кол-во бомб привышено');
      valid = false;
      numberBombs.classList.add('error-validation-input');
    } else if (inputNumberBombs.validity.rangeUnderflow) {
    // alert('кол-во бомб меньше допустимого');
      valid = false;
      numberBombs.classList.add('error-validation-input');
    } else {
    // изменение количества флагов в зависимости от бомб
      informationFlagCount.textContent = inputNumberBombs.value;
      valid = true;
    }
  }
  return valid;
};

const mousedown = (element) => {
  const { x } = element.target.dataset;
  const { y } = element.target.dataset;
  addFlag(element, x, y, quantityCells);
};
const mouseup = (element) => {
  console.log(element.button);
  if (element.target.classList.contains('btn') && !element.target.classList.contains('flag') && validationInput() && !playingField.classList.contains('game-over')) {
    if (element.button === 0) {
      time(element);
      const { x } = element.target.dataset;
      const { y } = element.target.dataset;
      buttonAssembly(quantityCells, element.target, x, y);
    }
  }
};
const clickReset = (element) => {
  time(element);
  deleteBtn();
  playingField.classList.remove('game-over');
  playingFieldBlock.classList.remove('grid-btn-easy');
  creatBtn(quantityCells);
};
const easyClick = (element) => {
  time(element);
  quantityCells = 10;
  deleteBtn();
  creatBtn(quantityCells);
};
const normalClick = (element) => {
  time(element);
  quantityCells = 15;
  deleteBtn();
  creatBtn(quantityCells);
};
const hardClick = (element) => {
  time(element);
  quantityCells = 25;
  deleteBtn();
  creatBtn(quantityCells);
};
easy.addEventListener('click', easyClick);
normal.addEventListener('click', normalClick);
hard.addEventListener('click', hardClick);
reboot.addEventListener('click', clickReset);
inputNumberBombs.addEventListener('change', validationInput);
inputNumberBombs.addEventListener('input', validationInput);
playingField.addEventListener('mousedown', mousedown);
playingField.addEventListener('mouseup', mouseup);
playingField.addEventListener('contextmenu', (e) => { e.preventDefault(); return false; });

// creat block

const { body } = document;

// header
const header = document.createElement('header');
header.className = 'header';
const logo = document.createElement('h1');
logo.className = 'logo';
header.prepend(logo);

// main
const main = document.createElement('main');
main.className = 'main';

const wrap = document.createElement('div');
wrap.className = 'wrap';

const mineSwiperBlock = document.createElement('div');
mineSwiperBlock.className = 'minesweeper-block';

const informationBlock = document.createElement('div');
informationBlock.className = 'minesweeper-block__information';
const informationFlagCount = document.createElement('div');
informationFlagCount.className = 'information__flag';
const informationLogo = document.createElement('div');
informationLogo.textContent = 'logo';
informationLogo.className = 'information__logo';
const informationTime = document.createElement('div');
informationTime.textContent = '00:00';
informationTime.className = 'information__timer';
informationBlock.append(informationFlagCount);
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

const quantityСells = 10;
let countSecond = 0;
let countMinutes = 0;
let interval;

// создание кнопок
const creatBtn = (value) => {
  const quantityValue = value;
  let x = 0;
  let y = 0;
  if (quantityValue === 10) {
    informationFlagCount.textContent = '10';
    playingFieldBlock.classList.add('grid-btn-easy');
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
  }
};

creatBtn(quantityСells);

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
  intervalValue = clearInterval(intervalValue);
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
function addClassBomb(array, arrBtn) {
  for (let i = 0; i < array.slice(0, 10).length; i += 1) {
    const btn = arrBtn[array[i]];
    btn.classList.add('bomb');
    btn.classList.remove('number');
  }
}

// делаем проверка начала игры, если это новая игра то добавляем рандомные бомбы
function startGame(arrBtn, array, el) {
  if (!playingField.classList.contains('active-game')) {
    playingField.classList.toggle('active-game');
    rundomNumver(quantityСells, array, el);
    addClassBomb(array, arrBtn);
  }
}

// функция нахождение бомбы
function findingBomb(x, y, el, quantity) {
  const arrBtn = document.getElementsByClassName('btn');
  const arr = [...arrBtn][+`${y}${x}`];
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
  console.log(el);
  console.log(`${x} - x`);
  console.log(`${y} - y`);
  for (let i = -1; i <= 1; i += 1) {
    console.log(`${i}iiiii`);
    for (let k = -1; k <= 1; k += 1) {
      if (findingBomb(+x + i, +y + k, el, quantity)) {
        count += 1;
      }
    }
  }
  return count;
}

// функция сборщик всего функционала по кноакам
function buttonAssembly(quantityValue, elValue, x, y) {
  const arrBtn = document.getElementsByClassName('btn');
  const array = [];
  let el = elValue;
  el = arrBtn[+`${y}${x}`];
  if (x >= 0 && y >= 0 && y < quantityValue && x < quantityValue) {
    if (!el.classList.contains('active-btn')) {
      startGame(arrBtn, array, el);
      el.classList.add('active-btn', 'btn--unlock');
      el.textContent = ' ';
      if (el.classList.contains('bomb')) {
        el.textContent = 'X';
      } else {
        const count = bombCount(el, quantityValue, x, y);
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

const clickbtn = (element) => {
  if (element.target.classList.contains('btn')) {
    time(element);
    const { x } = element.target.dataset;
    const { y } = element.target.dataset;
    buttonAssembly(quantityСells, element.target, x, y);
    console.log(element);
    console.log(element.target);
    console.log(element.target.classList);
    console.log(`${element.target.dataset.y}--${element.target.dataset.x}`);
  }
};
playingField.addEventListener('click', clickbtn);

// https://itp.uni-frankfurt.de/~mwagner/teaching/C_WS17/projects/Minesweeper.pdf
// https://www.codewithfaraz.com/content/134/learn-how-to-create-a-minesweeper-game-with-html-css-and-javascript
//

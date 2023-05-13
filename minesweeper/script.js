
// creat block

const body = document.body


// header
const header = document.createElement('header');
header.className = 'header'
const logo = document.createElement('h1'); 
logo.className = 'logo'
header.prepend(logo)

// main
const main = document.createElement('main');
main.className = 'main'

const wrap = document.createElement('div');
wrap.className = 'wrap';

const mineSwiperBlock = document.createElement('div');
mineSwiperBlock.className = 'minesweeper-block';

const informationBlock = document.createElement('div');
informationBlock.className = 'minesweeper-block__information';
const informationFlagCount = document.createElement('div');
informationFlagCount.className = 'information__flag';
const informationLogo= document.createElement('div');
informationLogo.textContent = 'logo' 
informationLogo.className = 'information__logo';
const informationTime = document.createElement('div');
informationTime.textContent = '00:00' 
informationTime.className = 'information__timer';
informationBlock.append(informationFlagCount)
informationBlock.append(informationLogo)
informationBlock.append(informationTime)

const playingFieldBlock = document.createElement('div');
playingFieldBlock.className = 'minesweeper-block__playing-field';

main.prepend(wrap)
wrap.prepend(mineSwiperBlock)
mineSwiperBlock.append(informationBlock)
mineSwiperBlock.append(playingFieldBlock)

body.prepend(main);
body.prepend(header);

let quantity = 10;
const creatBtn = (quantity) => {
    if (quantity === 10) {
        informationFlagCount.textContent = '10';
        playingFieldBlock.classList.add('grid-btn-easy')
        for(let i = 0; i < quantity*quantity; i += 1) {
            let btn = document.createElement('button');
            btn.className = 'btn';
            btn.id = i;


            playingFieldBlock.append(btn)
            console.log(i)
            

        }
    }

}

creatBtn(quantity)
function shuffle(quantity) {
    let array = []
    for(let i = 0; i < quantity*quantity; i += 1){
        array.push(i)
    }
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
  
      // поменять элементы местами
      // мы используем для этого синтаксис "деструктурирующее присваивание"
      // подробнее о нём - в следующих главах
      // то же самое можно записать как:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
      console.log (array[i] + '- random')
    }
    for(let i = 0; i < array.slice(0, 10).length; i += 1){
        let btn = document.getElementsByClassName('btn')[array[i]]
        btn.textContent = `b`
    }
  }
  shuffle(quantity)

const playingField = document.querySelector('.minesweeper-block__playing-field')

const clickbtn = (el) => {
    if(el.target.classList.contains('btn')) {
        console.log(el)
        console.log(el.target)
        console.log(el.x +  '--' + el.y)
    }
}

playingField.addEventListener('click', clickbtn )

//https://itp.uni-frankfurt.de/~mwagner/teaching/C_WS17/projects/Minesweeper.pdf
//https://www.codewithfaraz.com/content/134/learn-how-to-create-a-minesweeper-game-with-html-css-and-javascript
//
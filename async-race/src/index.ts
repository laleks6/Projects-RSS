
import './components/menu/menu.css'
import './components/race-field/race-field.css'
import './components/pagination/pagination.css'
import './components/winners/winners.css'
import './components/base/base.css'
import { Base } from "./components/base/base"
import { ControlMenu } from "./components/menu/menu"
import { RaceField } from './components/race-field/race-field'
import { Generate } from './components/race-field/generate'
import { AnimationCars } from './components/race-field/animation-car'
import { Random } from './components/random/random'
import { Event } from './components/event/event'
import { Winners } from './components/winners/winners'
import { Pagination } from './components/pagination/pagination'
import { LocalStorage } from './components/local-storage/storage'

const base = new Base()
const menu = new ControlMenu()
const raceField = new RaceField()
const generate = new Generate()
const winners = new Winners()
const animationCars = new AnimationCars()
const random = new Random()
const event = new Event()
const pagination = new Pagination()
const localStorage = new LocalStorage()
// random.createNameCar()
const createMenu = async() => {
    const main = await base.createMainBlock();
    const menuBlock = await menu.createBlockMenu();
    const pageChange = await menu.createBtnPageChange();
    const createCar = await menu.createBlockCreateCar();
    const updateCar = await menu.createBlockUpdateCar();
    const controlCar = await menu.createBlockControlCar();
    const blockRaceField = await raceField.createBlockRaceField();
    const generateBlockCar = await generate.generateBlockCars('default') 

}
base.createMainBlock();
 menu.createBlockMenu();
 menu.createBtnPageChange();
 menu.createBlockCreateCar();
 menu.createBlockUpdateCar();
 menu.createBlockControlCar();
 menu.clickBtnCreate()
 winners.creatBlockTableWinners()
 raceField.createBlockRaceField();
// generate.generateBlockCars('default') 
const pageId: string | null = localStorage.getLocalSorage('pageActive')
if(pageId !== null) {
    pagination.test(+pageId)
}


 setTimeout(()=>{
    pagination.pagination()
    event.clickBtnGarage()
    event.clickBtnWinners()
    event.carRace()
    event.carReset()
 }, 500)


//  const requestDeleteCar = async () =>  {
//     const url = 'http://127.0.0.1:3000'
//     const urlGarage = `/garage`
//     const metod = {'method': 'DELETE'}
//     for(let i = 0; i < 100; i++){
//         const response: Response  = await fetch(`${url}${urlGarage}/${i}`, metod);
//     const json = await response.json()
//     }
    
    
//     // return json  
// }
// requestDeleteCar()
//  function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return console.log(color);
//   }
//   getRandomColor()

// move

// // create base block
// base.createMainBlock()

// // create menu
// menu.createBlockMenu();
// menu.createBtnPageChange();
// menu.createBlockCreateCar();
// menu.createBlockUpdateCar();
// menu.createBlockControlCar();
// const test = async () => {
//     const metod = {'method': 'PATCH'}
//     const response: Response  = await fetch('http://127.0.0.1:3000/garage')
//     if(response.ok) {
//     const json = await response.json()
//     // console.log(json)
//     return json
//     }else{  
//     console.log('Eror')
//     }

// }
// test().then(data => console.log(data))

    
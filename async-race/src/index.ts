import './components/base/base.css'
import './components/menu/menu.css'
import './components/race-field/race-field.css'
import { Base } from "./components/base/base"
import { ControlMenu } from "./components/menu/menu"
import { RaceField } from './components/race-field/race-field'
import { Generate } from './components/race-field/generate'
import { AnimationCars } from './components/race-field/animation-car'
import { Random } from './components/random/random'

const base = new Base()
const menu = new ControlMenu()
const raceField = new RaceField()
const generate = new Generate()
const animationCars = new AnimationCars()
const random = new Random()
// random.createNameCar()
const createMenu = async() => {
    const main = await base.createMainBlock();
    const menuBlock = await menu.createBlockMenu();
    const pageChange = await menu.createBtnPageChange();
    const createCar = await menu.createBlockCreateCar();
    const updateCar = await menu.createBlockUpdateCar();
    const controlCar = await menu.createBlockControlCar();
    const blockRaceField = await raceField.createBlockRaceField();
    const generateBlockCar = await generate.generateCars('default') 

}
base.createMainBlock();
 menu.createBlockMenu();
 menu.createBtnPageChange();
 menu.createBlockCreateCar();
 menu.createBlockUpdateCar();
 menu.createBlockControlCar();
 menu.clickBtnCreate()
 raceField.createBlockRaceField();
 generate.generateCars('default') 
generate.clickBtnRemove()


setTimeout(()=>{
    animationCars.clickBtnStart()
    animationCars.clickBtnStop()
}, 500)







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

    
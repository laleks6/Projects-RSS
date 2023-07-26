import { Generate } from "../race-field/generate"
import { Random } from "../random/random"; 
import { iNewCar } from "../types";
import { Request } from "../request/request"; 
import { AnimationCars } from "../race-field/animation-car";


export class Event {
    generate: Generate = new Generate()
    request: Request = new Request()
    random: Random = new Random()
    animationCars: AnimationCars = new AnimationCars()

    generateCars = () => {
        const btnGenerate: Element = document.getElementsByClassName('btn-generate')[0]
        const eventGenerateCars = async () => {
          for(let i = 0; i < 100; i++) {
            const name = this.random.createNameCar()
            const color = this.random.createColorCar()
            const objectNewCar:iNewCar = {
                'name': name,
                'color': color
            }
            await this.request.requestCreateCar(objectNewCar)
          }
            await this.generate.generateBlockCars('default')
        }
        btnGenerate.addEventListener('click', eventGenerateCars)
    }
    carRace = () => {
        const btnReset: Element = document.getElementsByClassName('btn-reset')[0]
        const btnRace: Element = document.getElementsByClassName('btn-race')[0]
        const raceFields = Array.from(document.getElementsByClassName('block-race') as HTMLCollectionOf<Element>)
        const eventRace =  () => {
            console.log( raceFields)
          for(let i = 0; i < raceFields.length; i++) {
            this.animationCars.moveCar(i, +raceFields[i].id)
            btnRace.setAttribute('disabled', 'true')
            btnReset.removeAttribute('disabled')
          }
            
        }
        btnRace.addEventListener('click', eventRace)
    }
    clickBtnWinners = () => {
        const btnWinners = document.getElementsByClassName('btn-Winner')[0] as HTMLButtonElement;
        const garage: Element = document.getElementsByClassName('menu__block-Garage')[0]
        const  eventclickBtnWinners = () => {
            console.log('click Winner')
            const blockCreateCare:Element = document.getElementsByClassName('block-create-car')[0] 
            const blockUpdateCare: Element = document.getElementsByClassName('block-update-car')[0];
            const blockControlCare: Element = document.getElementsByClassName('block-control-car')[0];
            const blockRaceField: HTMLElement | null = document.getElementById('race-field');

            const blockWinners:Element = document.getElementsByClassName('menu__block-winners')[0];
            // const counterPage: Element = document.getElementsByClassName('menu__couner-page')[0];
            // const blockWinnersTable: Element = document.getElementsByClassName('menu__block-table')[0];

            blockWinners.classList.remove('block--none')
            // counterPage.classList.remove('block--none')
            // blockWinnersTable.classList.remove('block--none')
            garage.classList.add('block--none')
            // blockCreateCare.classList.add('block--none')
            // blockControlCare.classList.add('block--none')
            // blockUpdateCare.classList.add('block--none')
            blockRaceField?.classList.add('block--none')  
        }
        btnWinners.addEventListener('click', eventclickBtnWinners) 
    }
    clickBtnGarage = () => {
        const btnWinners: Element = document.getElementsByClassName('btn-Garage')[0] as HTMLButtonElement;
        const garage: Element = document.getElementsByClassName('menu__block-Garage')[0]
        const  eventclickBtnGarage= () => {
            console.log('click Garage')
            const blockCreateCare = document.getElementsByClassName('block-create-car')[0] as HTMLElement
            const blockUpdateCare: Element = document.getElementsByClassName('block-update-car')[0];
            const blockControlCare: Element = document.getElementsByClassName('block-control-car')[0];
            const blockRaceField: HTMLElement | null = document.getElementById('race-field');
            const blockWinners:Element = document.getElementsByClassName('menu__block-winners')[0];
            // const counterPage: Element = document.getElementsByClassName('menu__couner-page')[0];
            // const blockWinnersTable: Element = document.getElementsByClassName('menu__block-table')[0];

            blockWinners.classList.add('block--none')
            // counterPage.classList.remove('block--none')
            // blockWinnersTable.classList.remove('block--none')
            garage.classList.remove('block--none')
            // blockCreateCare.classList.remove('block--none')
            // blockControlCare.classList.remove('block--none')
            // blockUpdateCare.classList.remove('block--none')
            blockRaceField?.classList.remove('block--none') 
        }
        btnWinners.addEventListener('click', eventclickBtnGarage) 
    }
}
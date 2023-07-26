import { Request } from "../request/request";
import { Generate } from "../race-field/generate";
import { Event } from "../event/event";
import { LocalStorage } from "../local-storage/storage";

export class Pagination {
    request: Request = new Request()
    generate: Generate = new Generate()
    event: Event = new Event()
    localStorage: LocalStorage = new LocalStorage()
    #maxElemantInPage = 7;

    test = async (i:number) => {
        const arrayCars = await this.request.requestGarage()
        const liInnerText = i
        const start = (liInnerText - 1) * this.#maxElemantInPage
        const end: number = start + this.#maxElemantInPage
        const array = arrayCars.slice(start, end)
        console.log(array)
        await this.generate.generateBlockCars('pagination', array)
    }

    pagination = async () => {
        const countPage = document.getElementsByClassName('block-count__page')[0] as HTMLElement;
        const countCars = document.getElementsByClassName('block-count_cars')[0] as HTMLElement
        const bloc: Element | null = (document.querySelector('.block__li-pagination')) 
        const arrayCars = await this.request.requestGarage()
      
        this.createCuntPage(arrayCars.length)
        const pageId: string | null = this.localStorage.getLocalSorage('pageActive')
        if(pageId !== null) {
            this.test(+pageId)
        }
        const li = Array.from(document.getElementsByClassName('item') as HTMLCollectionOf<Element>)
        countPage.innerText = `Page #${pageId}`
        countCars.innerText = `Garage (${arrayCars.length})`
        
        for(let i = 0; i < li.length; i++){
            li[i].addEventListener('click', async () => {
                if(bloc !== null) {
                    bloc!.id = `${+li[i].innerHTML}`
                    this.localStorage.setLocalSorage(+bloc!.id)
                }
                this.test(+li[i].innerHTML)
                // countPage.innerText = `Page #${li[i].innerHTML}`
                // countCars.innerText = `Garage (${arrayCars.length})`
                // const liInnerText = +li[i].innerHTML
                // const start = (liInnerText - 1) * this.#maxElemantInPage
                // const end: number = start + this.#maxElemantInPage
                // const array = arrayCars.slice(start, end)
                // console.log(array)
                // await this.generate.generateBlockCars('pagination', array)
                
                // const raceFields =  Array.from(document.getElementsByClassName('block-race') as HTMLCollectionOf<HTMLElement>)
                // const svg = Array.from((document.getElementsByClassName('svg-car')) as HTMLCollectionOf<HTMLElement>);
                // console.log('raceField pafination ')
                // console.log(raceFields)

                // await this.event.carRace(raceFields, svg)
                window.location.reload()
            })
        }

        
    }

    createCuntPage = (cars:number) => {
        const count:number = Math.ceil(cars / this.#maxElemantInPage);
        for(let i = 1; i <= count; i++){
            const li = document.createElement('li')
            const ul: Element = document.getElementsByClassName('list')[0]
            const paginationNumber: Element = document.getElementsByClassName('block__li-pagination')[0]
            li.className = 'item'
            li.innerText = `${i}`
            paginationNumber.append(ul)
            ul.append(li)
        }
       
        
    }
}
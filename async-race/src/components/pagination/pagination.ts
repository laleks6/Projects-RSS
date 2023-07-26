import { Request } from "../request/request";
import { Generate } from "../race-field/generate";

export class Pagination {
    request: Request = new Request()
    generate: Generate = new Generate()
    #maxElemantInPage = 7;

    pagination = async () => {
        const countPage = document.getElementsByClassName('block-count__page')[0] as HTMLElement;
        const countCars = document.getElementsByClassName('block-count_cars')[0] as HTMLElement
        const arrayCars = await this.request.requestGarage()
        this.createCuntPage(arrayCars.length)
       
        const li = Array.from(document.getElementsByClassName('item') as HTMLCollectionOf<Element>)
        countPage.innerText = `Page #1`
        countCars.innerText = `Garage (${arrayCars.length})`
        for(let i = 0; i < li.length; i++){
            li[i].addEventListener('click', () => {
                countPage.innerText = `Page #${li[i].innerHTML}`
                countCars.innerText = `Garage (${arrayCars.length})`
                const liInnerText = +li[i].innerHTML
                const start = (liInnerText - 1) * this.#maxElemantInPage
                const end: number = start + this.#maxElemantInPage
                const array = arrayCars.slice(start, end)
                console.log(array)
                this.generate.generateBlockCars('pagination', array)
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
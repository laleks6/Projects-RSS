export class Pagination {
    #maxElemantInPage = 7;
    pagination = () => {
        
        const blockRace = Array.from(document.getElementsByClassName('block-race') as HTMLCollectionOf<Element>)
        const li = Array.from(document.getElementsByClassName('item') as HTMLCollectionOf<Element>)
        this.createCuntPage(blockRace.length)
        for(let i = 0; i < li.length; i++){
            li[i].addEventListener('click', () => {
                const liInnerText = +li[i].innerHTML
                const start = (liInnerText - 1) * this.#maxElemantInPage
                const end: number = start + this.#maxElemantInPage
                const array = blockRace.slice(start, end)
                console.log(array)
            })
        }

        

    }
    createCuntPage = (count:number) => {
        for(let i = 1; i < count/this.#maxElemantInPage; i++){
            const li = document.createElement('li')
            const ul = document.createElement('ul')
            const paginationNumber: Element = document.getElementsByClassName('block__li-pagination')[0]
           
            ul.className = 'list'
            li.className = 'item'
            li.innerText = `${i}`
            paginationNumber.append(ul)
            ul.append(li)
        }
       
        
    }
}
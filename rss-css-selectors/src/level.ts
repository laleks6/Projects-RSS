
import { EventEmitter } from './emitter'
import { View } from './view'
import { Table } from './table'
export class Level {
    state: string;
    tableBlock: HTMLTableElement | null = document.querySelector('.table');
    listItem: NodeListOf<Element> = document.querySelectorAll('.list__item-levels')
    eventEmitter = new EventEmitter()
    table = new Table()
    view = new View()
    constructor(state: string){
        this.eventEmitter.subscribe('switch', () => {
            const taskValTable = `task${+this.returnIdLevels()}`
            console.log('next' + taskValTable)
            this.table.tableFilling(taskValTable)
            this.view.addTags(taskValTable)
            
        })
        this.state = state;
    
    }

    eventLevels = () => {
        for (let i = 0; i < this.listItem.length; i++) {
            this.listItem[i].addEventListener('click', () => {
                for (let k = 0; k < this.listItem.length; k++) {
                    this.listItem[k].classList.remove('list__item--active')
                }
                this.listItem[i].classList.add('list__item--active')
                this.eventEmitter.dispath('switch')
            })
        }     

    }
    switchingLevels = () => {
        for (let i = 0; i < this.listItem.length; i++) {
            if(this.listItem[i].classList.contains('list__item--active') && !this.listItem[i].classList.contains('list__item--finished')){
                if(i >= 0 && i < 9){
                    this.listItem[i].classList.add('list__item--finished')
                }
                
            }
        }

    }
    addNextClassActive = (value:number) => {
        console.log('asss  ' + value )
        this.listItem[value].classList.add('list__item--active')
    }
    returnIdLevels = () => {
        let resultId!: string //Variable 'resultId' is used before being assigned. исправил !
        for (let i = 0; i < this.listItem.length; i++) {
            if(this.tableBlock?.classList.contains('start')){
                if (this.listItem[i].classList.contains('list__item--active')) {
                    console.log('id' + this.listItem[i].id)
                     resultId = this.listItem[i].id
                }

            }else {
                if (this.listItem[i].classList.contains('list__item--active') ) {
                    console.log('id' + this.listItem[i].id)
                     resultId = this.listItem[i].id
                }

            }
            
            
        }
        
        return resultId
    }



}
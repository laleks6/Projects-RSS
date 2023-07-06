import { task } from "./task"
import { Table } from './table'
import { Level } from './level'
import { View } from './view'
import { EventEmitter } from './emitter'


export class Editor {
    eventEmitter = new EventEmitter()
    table = new Table()
    view = new View()
    tableBlock: HTMLTableElement | null = document.querySelector('.table');
    level = new Level('active')
    constructor(){
        this.eventEmitter.subscribe('win', () => {
            const taskValTable = `task${+this.level.returnIdLevels() + 1}`
            console.log('next > win' + taskValTable)
            this.table.tableFilling(taskValTable)
            this.level.switchingLevels()
            this.view.addTags(taskValTable)
            this.checkInput(taskValTable)
            this.level.addNextClassActive(+this.level.returnIdLevels() + 1)
            this.tableBlock?.classList.remove('start')
        })
    }
    checkInput = (value: string) => {
        const input = document.querySelector('.editor__input') as HTMLInputElement
        const btnEnter: HTMLElement = document.querySelector('.editor__img-btn') as HTMLElement;
        
        btnEnter.addEventListener('mousedown', () => {
            btnEnter.classList.toggle('editor__img-btn--active')
            const inputValue = input.value;
            console.log(inputValue)
            console.log(input.value)
            if(Array.isArray(task[value].answer)){
                task[value].answer.forEach((el: string) => {
                    if(inputValue === el){
                        console.log('win')
                        input.value = ''
                        this.eventEmitter.dispath('win')
                        
        
                    }
                })
            }else {
                if(inputValue === task[value].answer){
                    console.log('win')
                    input.value = ''
                    this.eventEmitter.dispath('win')
                }
            }
        })
        btnEnter.addEventListener('mouseup', () => {
            btnEnter.classList.toggle('editor__img-btn--active')
        })

        document.addEventListener( 'keydown', (event) => {
            btnEnter.classList.toggle('editor__img-btn--active')
            const inputValue = input.value;
            if( event.code === 'Enter' ) {
                if(Array.isArray(task[value].answer)){
                    task[value].answer.forEach((el: string) => {
                        if(inputValue === el){
                            console.log('win')
                            input.value = ''
                            this.eventEmitter.dispath('win')
                        }
                    })
                }else {
                    if(inputValue === task[value].answer){
                        console.log('win')
                        input.value = ''
                        this.eventEmitter.dispath('win')
                    }
                }
            }
          });
          document.addEventListener( 'keyup', () => {
            btnEnter.classList.toggle('editor__img-btn--active')})

        // input.addEventListener('input', (event) => {
        //     const target: EventTarget = event.target as EventTarget;
        //     console.log(event) 
        //     console.log(target) 
        //     // const inputValue:string = target.value as string
            
        //   });
        // if(input.value )
    }
}



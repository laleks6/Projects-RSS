import { task } from "./task"
import { Table } from './table'
import { Level } from './level'
import { View } from './view'
import { EventEmitter } from './emitter'


export class Editor {
    
    constructor(){}
    
    checkInput = (value: string) => {
        const input = document.querySelector('.editor__input') as HTMLInputElement
        const btnEnter: HTMLElement = document.querySelector('.editor__img-btn') as HTMLElement;
        const tableBlock: HTMLTableElement | null = document.querySelector('.table');
        const table = new Table()
        const view = new View()
        const eventEmitter = new EventEmitter()
        const level = new Level('active')
        eventEmitter.subscribe('win', () => {
            let taskVal = `task${level.returnIdLevels()}`
            let taskValTable = `task${+level.returnIdLevels() + 1}`
            table.tableFilling(taskValTable)
            level.switchingLevels()
            view.addTags(taskValTable)
        })
        
        btnEnter.addEventListener('click', () => {
            
            let inputValue = input.value;
            console.log(inputValue)
            if(inputValue === task[value].answer){
                console.log('win')
                tableBlock?.classList.add('win')
                

            }
        })
        document.addEventListener( 'keydown', (event) => {
            let inputValue = input.value;
            if( event.code === 'Enter' ) {
                if(inputValue === task[value].answer){
                    tableBlock?.classList.add('win')
                    console.log('win')
                    eventEmitter.dispath('win')

                }
            };
          });

        // input.addEventListener('input', (event) => {
        //     const target: EventTarget = event.target as EventTarget;
        //     console.log(event) 
        //     console.log(target) 
        //     // const inputValue:string = target.value as string
            
        //   });
        // if(input.value )
    }
}



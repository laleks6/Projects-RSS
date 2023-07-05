import { task } from "./task"
import { EventEmitter } from './emitter'

export class View {
    eventEmitter: EventEmitter = new EventEmitter();
    viewerCode: HTMLCollectionOf<Element> = document.getElementsByClassName('code-highlighting')

    addTags = (value: string): void => {
        // const table = document.querySelector('.table') as HTMLDivElement
        const viewer = document.querySelector('.main-viewer') as HTMLDivElement

        // const plate: Element[] = [...document.getElementsByTagName('plate')]
        const code: string | undefined = task[value].view; 
        viewer.innerHTML= `<div>&lt;div class="table"&gt;</div>${code}<div>&lt;/div&gt;</div>`
        // viewer.innerHTML = '&lt;palte/&gt;&lt;palte/&gt;'
            

    }
    addHighlighting = ():void => {
        for (let i = 0; i < this.viewerCode.length; i++) {
            console.log(this.viewerCode[i])
            this.viewerCode[i].addEventListener('mouseover', (val) => {
                console.log(val)
             })
        }

    }
}
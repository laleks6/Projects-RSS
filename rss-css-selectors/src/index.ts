import './style.css'
import { Table } from './table'
import { Editor } from './editor'
import { Level } from './level'
import { View } from './view'
import { EventEmitter } from './emitter'
const table = new Table()
const view = new View()
const level = new Level('active')
const editor = new Editor()
const tableBlock: HTMLTableElement | null = document.querySelector('.table');



level.eventLevels()
const eventEmitter = new EventEmitter()
eventEmitter.subscribe('start', () => {
    const taskVal = `task${level.returnIdLevels()}`
    console.log(level.returnIdLevels())
    table.tableFilling(taskVal)
    view.addTags(taskVal)
    editor.checkInput(taskVal)
})
if(tableBlock?.classList.contains('start')) {
    eventEmitter.dispath('start')
}

view.addHighlighting()



    
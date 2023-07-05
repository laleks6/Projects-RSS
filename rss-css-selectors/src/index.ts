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

view.addHighlighting()

level.eventLevels()
const eventEmitter = new EventEmitter()
eventEmitter.subscribe('start', () => {
    let taskVal = `task${level.returnIdLevels()}`
    table.tableFilling(taskVal)
    view.addTags(taskVal)
    editor.checkInput(taskVal)
})
eventEmitter.subscribe('view', () => {

})


eventEmitter.dispath('start')

    
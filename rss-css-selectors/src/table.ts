import { task } from "./task"
export class Table {

    tableFilling = (value: string): void => {
        const table = document.querySelector('.table') as HTMLDivElement
        console.log(value)
        table.innerHTML = ' '     
        table.innerHTML = task[value].table;
    }
}

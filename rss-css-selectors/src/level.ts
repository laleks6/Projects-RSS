export class Level {
    [x: string]: any;
    state: string;
    table: HTMLTableElement | null = document.querySelector('.table');
    listItem: NodeListOf<Element> = document.querySelectorAll('.list__item-levels')
    constructor(state: string){
        this.state = state;
    
    }

    eventLevels = () => {
        let count = 0
        for (let i = 0; i < this.listItem.length; i++) {
            this.listItem[i].addEventListener('click', (event) => {
                // if(i > 0 && i < 9){
                //     if(this.listItem[i-1].classList.contains('list__item--active')){
                //         this.listItem[i-1].classList.add('list__item--skip')
                //     }
                //     if(this.listItem[i+1].classList.contains('list__item--active')){
                //         this.listItem[i+1].classList.add('list__item--skip')}
                // }
                for (let k = 0; k < this.listItem.length; k++) {
                    this.listItem[k].classList.remove('list__item--active')
                }
                this.listItem[i].classList.add('list__item--active')
            })
        }     

    }
    switchingLevels = () => {
        for (let i = 0; i < this.listItem.length; i++) {

            if(this.listItem[i].classList.contains('list__item--active')){
                this.listItem[i].classList.add('list__item--finished')
                for (let k = 0; k < this.listItem.length; k++) {
                    this.listItem[k].classList.remove('list__item--active')
                }
                // if(i >= 0 && i < 9){
                //     console.log('gagaf')
                //     this.listItem[i+1].classList.add('list__item--active')
                // }
                
            }
        }

    }

    returnIdLevels = () => {

        let resultId!: string //Variable 'resultId' is used before being assigned. исправил !
        for (let i = 0; i < this.listItem.length; i++) {
           if (this.listItem[i].classList.contains('list__item--active')) {
               console.log('id' + this.listItem[i].id)
            resultId = this.listItem[i].id
           }
        }
        return resultId
    }



}

export class Base {
    private body: HTMLElement = document.body
    createMainBlock = ():void => {
        const main: HTMLElement = document.createElement('main');
        main.id = 'main'
        this.body.append(main)

    }
}
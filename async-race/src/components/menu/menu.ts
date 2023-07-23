import { Generate } from "../race-field/generate";
import { iNewCar, IGarage } from "../types";
import { Request } from "../request/request";
import { Random } from "../random/random";

export class ControlMenu  {
    // private body: HTMLElement = document.body
    // #blockMenu: HTMLElement | null = document.getElementById('menu');
    generate: Generate = new Generate()
    request: Request = new Request()
    random: Random = new Random()

    createBlockMenu = ():void => {
        const menu: HTMLElement = document.createElement('div');
        const main: HTMLElement | null = document.getElementById('main')

        menu.id = 'menu'
        menu.className = 'block-menu'
        if(main !== null) {
            main.append(menu);
        }
    }

    createBtnPageChange = ():void => {
        const  blockMenu: HTMLElement | null = document.getElementById('menu');
        console.log(blockMenu !== null)
        if(blockMenu !== null) {
            console.log(blockMenu !== null)
            const blockBtnsPageChange: HTMLElement = document.createElement('div');
            const btnGarage: HTMLElement = document.createElement('button');
            const btnWinner: HTMLElement = document.createElement('button');

            blockBtnsPageChange.className = 'block-btns-page-change';
            btnGarage.className = 'btn btn-Garage';
            btnWinner.className = 'btn btn-Winner';

            btnGarage.innerText = 'Garage';
            btnWinner.innerText = 'Winner';

            blockMenu.append(blockBtnsPageChange);
            blockBtnsPageChange.append(btnGarage);
            blockBtnsPageChange.append(btnWinner);
        }
    }
    createBlockCreateCar = ():void => {
        const  blockMenu: HTMLElement | null = document.getElementById('menu');
        if(blockMenu !== null) {
            const blockCreateCar: HTMLElement = document.createElement('div');
            const inputName: HTMLElement = document.createElement('input');
            const color: HTMLElement = document.createElement('input');
            const btnCreateCar: HTMLElement = document.createElement('button');

            inputName.setAttribute('type', 'text');
            color.setAttribute('type', 'color');

            blockCreateCar.className = 'block-create-car';
            inputName.id = 'input-name-create';
            color.id = 'input-color-create';
            btnCreateCar.className = 'btn btn-create-car';

            btnCreateCar.innerText = 'Create';
            

            blockMenu.append(blockCreateCar);
            blockCreateCar.append(inputName);
            blockCreateCar.append(color);
            blockCreateCar.append(btnCreateCar);
        }
    }
    
    createBlockUpdateCar = ():void => {
        const  blockMenu: HTMLElement | null = document.getElementById('menu');
        if(blockMenu !== null) {
            const blockUpdateCar: HTMLElement = document.createElement('div');
            const inputName: HTMLElement = document.createElement('input');
            const color: HTMLElement = document.createElement('input');
            const btnCreateCar: HTMLElement = document.createElement('button');

            inputName.setAttribute('type', 'text');
            color.setAttribute('type', 'color');

            blockUpdateCar.className = 'block-update-car';
            inputName.id = 'input-name-update';
            color.id = 'input-color-update';
            btnCreateCar.id = 'btn-update-car';
            btnCreateCar.className = 'btn';

            btnCreateCar.innerText = 'Update'

            blockMenu.append(blockUpdateCar);
            blockUpdateCar.append(inputName);
            blockUpdateCar.append(color);
            blockUpdateCar.append(btnCreateCar);
        }
    }

    createBlockControlCar = ():void => {
        const  blockMenu: HTMLElement | null = document.getElementById('menu');
        if(blockMenu !== null) {
            const blockControlCar: HTMLElement = document.createElement('div');
            const btnStart: HTMLElement = document.createElement('button');
            const btnReset: HTMLElement = document.createElement('button');
            const btnGenerate: HTMLElement = document.createElement('button');
           
            blockControlCar.className = 'block-control-car';
            btnStart.className = 'btn btn-start';
            btnReset.className = 'btn btn-reset';
            btnGenerate.className = 'btn btn-generate'

            btnStart.innerText = 'Race'
            btnReset.innerText = 'Reset'
            btnGenerate.innerText = 'Generate'
            
            blockMenu.append(blockControlCar);
            blockControlCar.append(btnStart);
            blockControlCar.append(btnReset);
            blockControlCar.append(btnGenerate);
           
        }

    }

    clickBtnCreate = () => {
        const btnCreate: Element = document.getElementsByClassName('btn-create-car')[0];
        btnCreate.addEventListener('click', async () => {
            const inputName = document.getElementById('input-name-create') as HTMLInputElement;
            const inputColor = document.getElementById('input-color-create') as HTMLInputElement;
            const name = inputName.value !== '' ? inputName.value : this.random.createNameCar()
            const color = inputColor.value
            const objectNewCar:iNewCar = {
                'name': name,
                'color': color
            }
            await this.request.requestCreateCar(objectNewCar)
            await this.generate.generateCars('newCar')


            
        })
    }
}
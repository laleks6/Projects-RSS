import { IGarage } from "components/types";
import { Request } from "../request/request";
import { Random } from "../random/random";
import { iNewCar } from "../types";
import { AnimationCars } from "./animation-car";



export class Generate {

    request: Request = new Request
    animationCars: AnimationCars = new AnimationCars
    
    #addsvg = (color?: string) => {
        let svg:string
        const svgCar = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
        <svg class="svg-car"  viewBox="0 0 400 400" fill=${color} xmlns="http://www.w3.org/2000/svg">
        <path d="M47 232.735C48.4246 221.084 48.7322 209.254 49.8438 197.66" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M55.168 192.264C94.3021 170.326 238.898 95.2264 246.732 181.436" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M75.4033 195.607C120.206 186.193 361.578 139.763 344.331 235.433" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M322.277 244.876C332.859 243.916 342.827 239.677 353.305 238.131" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M268.316 227.65C273.344 223.411 276.541 214.633 283.581 213.083C309.001 207.493 331.57 243.568 304.852 256.789C281.398 268.387 260.878 243.015 277.586 224.415" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M79.5169 226.914C110.155 175.735 153.384 245.823 109.035 258.807C90.5036 264.232 70.4089 244.217 83.8087 229.115" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M258.873 239.059C190.155 241.806 116.847 229.997 48.4229 235.624" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M352.003 219.244C351.792 226.929 352.003 234.736 352.003 242.178" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
        const svgFlag = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
        <svg class="flag" width="800px" height="800px" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 22V14M5 14V4M5 14L7.47067 13.5059C9.1212 13.1758 10.8321 13.3328 12.3949 13.958C14.0885 14.6354 15.9524 14.7619 17.722 14.3195L17.9364 14.2659C18.5615 14.1096 19 13.548 19 12.9037V5.53669C19 4.75613 18.2665 4.18339 17.5092 4.3727C15.878 4.78051 14.1597 4.66389 12.5986 4.03943L12.3949 3.95797C10.8321 3.33284 9.1212 3.17576 7.47067 3.50587L5 4M5 4V2" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
        </svg>`;

        if(color !== undefined) {
            svg = svgCar
        }else{
            svg = svgFlag
        }

        return svg
    }
//inputName?: string | undefined, inputColor?: string | undefined
    generateBlockCars = async(count: string, array?: IGarage[]) => {
        let promisDataCars:IGarage[] | undefined 
         const garage = await this.request.requestGarage().
        then(data =>{ return data});
        if(count === 'default'){
            promisDataCars = await this.request.requestGarage().
            then(data =>{ return data});

        }else if(count === 'newCar'){
            promisDataCars = await this.request.getRequestCar(+garage[garage.length-1].id).
            then(data =>{ return [data]}) ;
        }else if(count === 'pagination'){
            this.deleteBlocs()
            promisDataCars = array;
        }
        
        if (promisDataCars !== undefined) {
           
            for (let i = 0; i < promisDataCars.length; i++) {
                if(i < 7) {
                    const name = promisDataCars[i].name;
                    const color = promisDataCars[i].color ;
                    const id = promisDataCars[i].id 
    
                    
                    // const id: number = promisDataCars[i].id;
        
                    const raceField: HTMLElement | null = document.getElementById('race-field');  
                    const blockRace: HTMLElement = document.createElement('div');
                    const carInfo: HTMLElement = document.createElement('div');
                    const btnSelect: HTMLElement = document.createElement('button');
                    const btnRemove: HTMLElement = document.createElement('button');
                    const carBrand: HTMLElement = document.createElement('span');
                    const blockCar: HTMLElement = document.createElement('div');
                    const controlCar: HTMLElement = document.createElement('div');
                    const btnContols: HTMLElement = document.createElement('div');
                    const btnStart: HTMLElement = document.createElement('button');
                    const btnStop: HTMLElement = document.createElement('button');
                    const carAndFlag: HTMLElement = document.createElement('div');
                    const imgCar: HTMLElement = document.createElement('div');
                    const imgFlag: HTMLElement = document.createElement('div');
                    const roadRace: HTMLElement = document.createElement('div');
        
                    blockRace.className = 'block-race';
                    blockRace.id = `${id}`;
                    carInfo.className = 'block-race__car-info';
                    btnSelect.className = 'btn btn-seclect';
                    btnRemove.className = 'btn btn-remove';
                    carBrand.className = 'car-brand';
                    blockCar.className = 'block-car';
                    controlCar.className = 'control-car';
                    btnContols.className = 'control-car__btns';
                    btnStart.className = 'btn btn-start-car';
                    btnStop.className = 'bnt btn-stop-car';
                    carAndFlag.className = 'block-car-and-flag';
                    imgCar.className = 'img-car';
                    imgFlag.className = 'img-flag'
                    roadRace.className = 'road-race';
                    carBrand.className = 'car-brand';
        
                    btnStart.innerText = 'Start'
                    btnStop.innerText = 'Stop'
                    
                    carBrand.innerText = name ;
                    imgCar.innerHTML = this.#addsvg(color)
                    imgFlag.innerHTML = this.#addsvg()
                    btnSelect.innerText = 'SELECT'
                    btnRemove.innerText = 'REMOVE'
                    btnStop?.setAttribute('disabled', 'true')
                    if(raceField !== null) {
                        raceField.append(blockRace);
                        blockRace.append(carInfo);
                        blockRace.append(blockCar);
                        carInfo.append(btnSelect);
                        carInfo.append(btnRemove);
                        carInfo.append(carBrand);
                        blockCar.append(controlCar);
                        blockCar.append(roadRace);
                        controlCar.append(btnContols);
                        controlCar.append(carAndFlag)
                        btnContols.append(btnStart);
                        btnContols.append(btnStop);
                        carAndFlag.append(imgCar);
                        carAndFlag.append(imgFlag);
                    }
                   
                }
                }  

        }
        this.clickBtnSelect()
        this.clickBtnRemove()
        this.animationCars.clickBtnStart()
        this.animationCars.clickBtnStop()
        
        
    }

    deleteBlocs = () => {
        const blockRace = Array.from((document.getElementsByClassName('block-race')) as HTMLCollectionOf<HTMLElement>)
        for(let i = 0; i< blockRace.length; i++) {
            blockRace[i].remove()
        }
        
    }

    clickBtnSelect = () => {
        const blockRace = Array.from((document.getElementsByClassName('block-race')) as HTMLCollectionOf<HTMLElement>)
        const btnRemove = Array.from((document.getElementsByClassName('btn-seclect')) as HTMLCollectionOf<HTMLElement>)
        const inputName = document.getElementById('input-name-update') as HTMLInputElement;
        const inputColor = document.getElementById('input-color-update') as HTMLInputElement;
        const btnUpdate: HTMLElement | null = document.getElementById('btn-update-car');
        const blockCar = Array.from((document.getElementsByClassName('car-brand')) as HTMLCollectionOf<HTMLElement>)
        const blockSvg = Array.from((document.getElementsByClassName('svg-car')) as HTMLCollectionOf<HTMLElement>)
        // const blockCar = Array.from((document.getElementsByClassName('block-race')) as HTMLCollectionOf<HTMLElement>)
        for(let i = 0; i < btnRemove.length; i++) {
            
            btnRemove[i].addEventListener('click', async () => {
                const car = await this.request.getRequestCar(+blockRace[i].id).then(data => {return data})
                console.log('SELECT')
                inputName?.focus()
                const name: string = car.name
                const color: string = car.color
                inputName.value = car.name
                inputColor.value = car.color
                btnUpdate?.addEventListener('click', async () => {
                    blockCar[i].innerText = inputName.value
                    blockSvg[i].style.fill = inputColor.value
                    const objectUpdateCar:iNewCar = {
                        'name': inputName.value,
                        'color': inputColor.value
                    }
                    await this.request.requestUpdateCar(objectUpdateCar, +blockRace[i].id)
                    await this.request.requestGarage()
                    inputName.value = ''
                    inputColor.value = '#000000'
                })
                
            })
        }


    }

    clickBtnRemove = async () => {
    
        const btnRemove: NodeListOf<Element> = document.querySelectorAll('.btn-remove')
        const blockCar: NodeListOf<Element> = document.querySelectorAll('.block-race')
        const bloc: Element | null = (document.querySelector('.race-field')) 
        for(let i = 0; i < btnRemove.length; i++) {
            const eventRemove = async () => {
                // let car: string | HTMLElement =  blockCar[i] 
                console.log('REMOVE')

                await this.request.requestDeleteCar(+blockCar[i].id)
                await this.request.requestGarage()
           
                blockCar[i].remove()
                // const remove = await blockCar[i]!.remove()
                // blockCar[i].remove()
               
                 window.location.reload()
                // field.removeChild(field.children[i])
                
                // console.log(field.children[i])
                btnRemove[i].removeEventListener('click', eventRemove)
                
            }
            btnRemove[i].addEventListener('click', eventRemove)
            
          
        }


    }

}
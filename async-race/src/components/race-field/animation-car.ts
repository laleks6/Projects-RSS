import { Request } from "../request/request";

export class AnimationCars {
    request: Request = new Request()

    clickBtnStart = () => {
        const btnStart: HTMLCollectionOf<Element> = document.getElementsByClassName('btn-start-car');
        const blockCar: HTMLCollectionOf<Element>= document.getElementsByClassName('block-car-and-flag');
        console.log(`${btnStart.length} - length ${btnStart}`)
        
            
        for(let i = 0; i < btnStart.length; i++){       
            btnStart[i]?.addEventListener('click', () => {
                if(!blockCar[i]?.classList.contains('race--active')) {
                    console.log('START')
                    blockCar[i]?.classList.add('race--active');
                    this.moveCar(i)
                }
            })    
        }
    }

    clickBtnStop = () =>{
        const btnStop:  HTMLCollectionOf<Element> = document.getElementsByClassName('btn-stop-car');
        const blockCar: HTMLCollectionOf<Element>= document.getElementsByClassName('block-car-and-flag');
        const car = Array.from((document.getElementsByClassName('svg-car')) as HTMLCollectionOf<HTMLElement>);
        console.log(`${btnStop.length} - length ${btnStop}`)
        console.log(btnStop)
        for(let i = 0; i < btnStop.length; i++){
            btnStop[i]?.addEventListener('click', () => {
                if(blockCar[i]?.classList.contains('race--active')) {
                    console.log('STop')
                    blockCar[i]?.classList.remove('race--active');
                    car[i].style.transform = `translateX(${0}px)`;
                }
            })
        }
    }

    returnStatusEror = async (index:number) => {
        const statusEror =  await this.request.requestFrameDriveEngine(index).
        then(() => {return 0}).
        catch(() => {return 1})
        return statusEror
    }

    moveCar = async (index:number): Promise<void> => {

        const blockCar = Array.from((document.getElementsByClassName('img-car')) as HTMLCollectionOf<HTMLElement>)[0];
        const car = Array.from((document.getElementsByClassName('svg-car')) as HTMLCollectionOf<HTMLElement>);
        const statusEngin = await this.request.requestFrameStartEngine(index)

        let startPoint = 0;
        const velocity = statusEngin.velocity
        const distance = statusEngin.distance
        const time = distance / velocity
        const secondsInAMinute = 60
        const miliSecindsInASeconds = time / 1000
        const frame = miliSecindsInASeconds * secondsInAMinute
        const widthCar = 50
        const widthRoad: number = blockCar.offsetWidth + widthCar;
        const pointFinish: number = blockCar.offsetWidth - 25
        const dx = (widthRoad - startPoint) / frame
        console.log(time)
        // console.log(statusEngin)
        const moveFrame = () => {

            if(startPoint > widthRoad || startPoint === 1) {
                console.log('rEALfinish')
                console.log(startPoint);
                const statusEnginStop =  this.request.requestFrameStopEngine(index);  
            }

            if(startPoint < widthRoad && startPoint !== 1) {
                console.log(startPoint);
                car[index].style.transform = `translateX(${startPoint+=dx}px)`;
                const animationFrame = requestAnimationFrame(moveFrame);
            } 

        }
        moveFrame()
        startPoint = await this.returnStatusEror(index).then(data => { return data }) as unknown as number
      

        console.log(widthRoad)
    }
}


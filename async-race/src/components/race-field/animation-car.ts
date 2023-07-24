import { Request } from "../request/request";


export class AnimationCars {
    request: Request = new Request()
    

    clickBtnStart = () => {
        const btnStart = Array.from((document.getElementsByClassName('btn-start-car')) as HTMLCollectionOf<HTMLElement>)
        const blockCar = Array.from((document.getElementsByClassName('block-car-and-flag')) as HTMLCollectionOf<HTMLElement>)
        const blockRace = Array.from((document.getElementsByClassName('block-race')) as HTMLCollectionOf<HTMLElement>)
        console.log(`${btnStart.length} - length ${btnStart}`)
        
            
        for(let i = 0; i < btnStart.length; i++){     
           const  eventBtnStart = () => {
            if(!blockCar[i]?.classList.contains('race--active')) {
                console.log('START')
                console.log(blockRace)
                console.log(blockRace[i])
                blockCar[i]?.classList.add('race--active');
                this.moveCar(i, +blockRace[i].id)
                this.timer(0)
                btnStart[i]?.removeEventListener('click', eventBtnStart)
            }
           }  
            btnStart[i]?.addEventListener('click', eventBtnStart)
            
             
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

    moveCar = async (index:number, id:number): Promise<void> => {
        console.log(`index-  ${index}`)
        console.log(`id-  ${id}`)
        const blockCar = Array.from((document.getElementsByClassName('img-car')) as HTMLCollectionOf<HTMLElement>)[0];
        const car = Array.from((document.getElementsByClassName('svg-car')) as HTMLCollectionOf<HTMLElement>);
        const statusEngin = await this.request.requestFrameStartEngine(id)

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
            let countWinners = 0
            if(startPoint > widthRoad) {
                console.log('rEALfinish')
                console.log(startPoint);
                countWinners++
                if(countWinners === 1){
                    
                    this.timer(countWinners)
                }
                const statusEnginStop = this.request.requestFrameStopEngine(id);  
            }
            if(startPoint === 1) {
                console.log('rEALfinish---500')
                console.log(startPoint);
                this.timer(1)
                const statusEnginStop = this.request.requestFrameStopEngine(id);  
            }

            if(startPoint < widthRoad && startPoint !== 1) {
                console.log(startPoint);
                car[index].style.transform = `translateX(${startPoint+=dx}px)`;
                const animationFrame = requestAnimationFrame(moveFrame);
            } 

        }
        moveFrame()
        startPoint = await this.returnStatusEror(id).then(data => { return data }) as unknown as number
      

        console.log(widthRoad)
    }
    timer = (stopCount:number) => {
        let miliSeconds = 0
        let seconds = 0
        const timer = document.createElement('span')
       
        const tick =  ()  => {
            miliSeconds+=1
            if(miliSeconds === 100){
                seconds+=1
                miliSeconds = 0
            }
            this.returTime(miliSeconds, seconds, stopCount)
            if(stopCount === 1) {
                clearInterval(interval) 
            }
            
        }
        
        const interval = setInterval(tick, 10)
        console.log(`${miliSeconds}/${seconds} фффффф`)

    }
    returTime = (ms:number, s:number, status:number) => {
        if(status === 1) {
            console.log(`${ms}/${s} finis`)
        }
        console.log(`${ms}/${s} sssss`)
    }
}


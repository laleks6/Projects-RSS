import { IGarage, ITime, iDriveStatus, iNewCar } from "components/types"
export class Request {
    private url = 'http://127.0.0.1:3000'
    requestGarage = async () =>  {
        const urlGarage = `/garage`
        const response  = await fetch(`${this.url}${urlGarage}`);
        const json: IGarage[] = await response.json();
        console.log(json)
        return json  
    }
    requestFrameStartEngine = async (id: number) =>  {
        const urlGarage = `/engine`
        const metod = {'method': 'PATCH'}
        const response: Response  = await fetch(`${this.url}${urlGarage}?id=${id+1}&status=started`, metod);
        const json = await response.json() as Promise<ITime>;
        
        return json  
    }
    requestFrameDriveEngine = async (id: number) =>  {
        const urlGarage = `/engine`
        const metod = {'method': 'PATCH'}
        const response: Response  = await fetch(`${this.url}${urlGarage}?id=${id+1}&status=drive`, metod);
        const json = await response.json() as Promise<iDriveStatus> ;
        
        return json  
    }
    requestFrameStopEngine = async (id: number) =>  {
        const urlGarage = `/engine`
        const metod = {'method': 'PATCH'}
        const response: Response  = await fetch(`${this.url}${urlGarage}?id=${id+1}&status=stopped`, metod);
        const json = await response.json() as Promise<ITime>;

        return json  
    }
    requestStatusEngine = async (id: number) =>  {
        const urlGarage = `/engine`
        const metod = {'method': 'PATCH'}
        const response: Response  = await fetch(`${this.url}${urlGarage}?id=${id+1}&status=started`, metod);
        const json = await response.json() as Promise<ITime>;
        
        return json  
    }

    requestCreateCar = async (obj?: iNewCar) =>  {
        const urlGarage = `/garage`
        const metod = {'method': 'POST',
                        'body': JSON.stringify(obj),
                        'headers': {
                            'Content-Type': 'application/json'
                            }
                        }

        const response: Response  = await fetch(`${this.url}${urlGarage}`, metod);
        // const json = await response.json().then(data => console.log(data.status))
        
        // return json  
    }
    requestDeleteCar = async (id:number) =>  {
        const urlGarage = `/garage`
        const metod = {'method': 'DELETE'}

        const response: Response  = await fetch(`${this.url}${urlGarage}/${id}`, metod);
        // const json = await response.json().then(data => console.log(data.status))
        
        // return json  
    }
}
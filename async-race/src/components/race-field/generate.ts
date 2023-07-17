import { IGarage } from "components/types";
import { Request } from "../request/request";

export class Generate {
    request: Request = new Request
    
    generateDefaultCars = () => {
        const car = this.request.requestGarage()
        for(const key in car) {
            car[key]
        }
        
    }
}
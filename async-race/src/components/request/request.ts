import { IGarage } from "components/types"
export class Request {
    private url = 'http://127.0.0.1:3000'
    requestGarage = async () =>  {
        const urlGarage = '/garage'
        const response  = await fetch(`${this.url}${urlGarage}`).then(data => data.json()).then(data => data)
        return response
    }
}
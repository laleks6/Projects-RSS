export class EventEmitter {
    #listeners: {
        [key: string]: any
    } = {}
    #getCallBackFor(eventName:string){
        return this.#listeners[eventName] ?? [];
    }
    #setCallBackFor(eventName:string, Listeners:() => void){
        if(Listeners.length === 0){
            delete this.#listeners[eventName] 
        } else {
            this.#listeners[eventName] = Listeners
            console.log(this.#listeners)
        }
        
    }
    subscribe(eventName:string, callback: any){
        const subs = this.#getCallBackFor(eventName);

        subs.push(callback);

        this.#setCallBackFor(eventName, subs)
        
        
    }
    unsubscrib(eventName: string, callback: any){
        const subs = this.#getCallBackFor(eventName)
        .filter((item: () => void) => item !== callback);

        this.#setCallBackFor(eventName, subs)
    }
    dispath(eventName: string){
        this.#getCallBackFor(eventName)
        .forEach((callback: any) => callback())
    }
}
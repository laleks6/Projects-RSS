export class LocalStorage {

    setLocalSorage = (i:number) => {
        console.log('localstorage' + i)
        localStorage.setItem('pageActive', `${i}`)
    }
    
    getLocalSorage = (key:string) => {
        console.log('get localstorage' +  key)
        const storage: string | null = localStorage.getItem(`${key}`);
        return storage
    }
}
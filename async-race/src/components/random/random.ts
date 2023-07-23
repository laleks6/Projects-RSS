export class Random {
   
    #randomBrand = ['Tesla', 'BMW', 'Ferrari', 'Ford', 'Porsh', 'Jaguar', 'Mitsubishi', 'Nissan', 'Mazda', 'Alfa Romeo'];
    #randomModel = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    
    getRandom = (array: string[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    createNameCar = () => {
        const name = `${this.getRandom(this.#randomBrand)[0]} ${this.getRandom(this.#randomModel)[0]}`
        console.log(name)
        return name
    }

}
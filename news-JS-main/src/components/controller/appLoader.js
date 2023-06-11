import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'fbd0bd9b9ca1431bb0cda8d17722bcb7', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;

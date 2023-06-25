import { INewsAllProps } from '../../types/index';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sources: HTMLElement = document.querySelector('.sources') as HTMLElement;

        sources.addEventListener('click', (e: Event): void =>
            this.controller.getNews(e, (data: INewsAllProps) => this.view.drawNews(data))
        );
        this.controller.getSources((data: INewsAllProps) => this.view.drawSources(data));
    }
}

export default App;

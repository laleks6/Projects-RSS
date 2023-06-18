import './sources.css';
import { INewsProps } from 'src/types/index';
class Sources {
    draw(data: INewsProps[]) {
        const fragment: DocumentFragment = document.createDocumentFragment() as DocumentFragment;
        const sourceItemTemp: Element = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            let sourceClone: DocumentFragment;
            if (sourceItemTemp instanceof HTMLTemplateElement) {
                sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

                const sourceItemName: HTMLElement = sourceClone.querySelector('.source__item-name') as HTMLElement;
                const sourceItem: HTMLElement = sourceClone.querySelector('.source__item') as HTMLElement;
                if (sourceItemName instanceof HTMLElement) sourceItemName.textContent = item.source.name;

                if (sourceItem instanceof HTMLElement) sourceItem.setAttribute('data-source-id', item.source.id);
                // sourceClone!.querySelector('.source__item-name')!.textContent = item.source.name;
                // sourceClone!.querySelector('.source__item')!.setAttribute('data-source-id', item.source.id);

                fragment.append(sourceItemName);
                fragment.append(sourceItem);
            }
        });

        const appendSources: HTMLElement = document.querySelector('.sources') as HTMLElement;
        if (appendSources instanceof HTMLElement) appendSources.append(fragment);
        // document.querySelector('.sources')!.append(fragment);
    }
}

export default Sources;

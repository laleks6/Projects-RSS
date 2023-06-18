import './news.css';
import { INewsProps } from 'src/types/index';

class News {
    draw(data: INewsProps[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx: number) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item: INewsProps, idx: number): void => {
            const newsClone: HTMLElement = newsItemTemp.content.cloneNode(true) as HTMLElement;
            if (newsClone instanceof HTMLElement) {
                if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

                const photo: HTMLElement = newsClone.querySelector('.news__meta-photo') as HTMLElement;
                const autorText: HTMLElement = newsClone.querySelector('.news__meta-author') as HTMLElement;
                const date: HTMLElement = newsClone.querySelector('.news__meta-date') as HTMLElement;
                const descriptionTitle: HTMLElement = newsClone.querySelector(
                    '.news__description-source'
                ) as HTMLElement;
                const descriptionSource: HTMLElement = newsClone.querySelector(
                    '.news__description-source'
                ) as HTMLElement;
                const descriptionContent: HTMLElement = newsClone.querySelector(
                    '.news__description-content'
                ) as HTMLElement;
                const readMore: HTMLElement = newsClone.querySelector('.news__read-more a') as HTMLElement;

                if (photo instanceof HTMLElement)
                    photo.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

                if (autorText instanceof HTMLElement) autorText.textContent = item.author || item.source.name;

                if (date instanceof HTMLElement)
                    date.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

                if (descriptionTitle instanceof HTMLElement) descriptionTitle.textContent = item.title;

                if (descriptionSource instanceof HTMLElement) descriptionSource.textContent = item.source.name;
                if (descriptionContent instanceof HTMLElement) descriptionContent.textContent = item.description;
                if (readMore instanceof HTMLElement) readMore.setAttribute('href', item.url);

                // newsClone.querySelector<HTMLElement>('.news__meta-photo')!.style.backgroundImage = `url(${
                //     item.urlToImage || 'img/news_placeholder.jpg'
                // })`;
                // newsClone.querySelector('.news__meta-author')!.textContent = item.author || item.source.name;
                // newsClone.querySelector('.news__meta-date')!.textContent = item.publishedAt
                //     .slice(0, 10)
                //     .split('-')
                //     .reverse()
                //     .join('-');

                // newsClone.querySelector('.news__description-title')!.textContent = item.title;
                // newsClone.querySelector('.news__description-source')!.textContent = item.source.name;
                // newsClone.querySelector('.news__description-content')!.textContent = item.description;
                // newsClone.querySelector('.news__read-more a')!.setAttribute('href', item.url);

                fragment.append(photo);
                fragment.append(autorText);
                fragment.append(date);
                fragment.append(descriptionTitle);
                fragment.append(descriptionSource);
                fragment.append(descriptionContent);
                fragment.append(readMore);
            }
        });
        const documentInnerNews: HTMLElement = document.querySelector('.news') as HTMLElement;
        const appendBlockNews: HTMLElement = document.querySelector('.news') as HTMLElement;
        if (documentInnerNews instanceof HTMLElement) documentInnerNews.innerHTML = '';
        if (appendBlockNews instanceof HTMLElement) appendBlockNews.appendChild(fragment);
        // document.querySelector('.news')!.innerHTML = '';
        // document.querySelector('.news')!.appendChild(fragment);
    }
}

export default News;

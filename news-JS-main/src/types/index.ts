export interface INewsAllProps {
    status: string;
    totalResult: number;
    articles?: Array<INewsProps>;
}
export interface INewsProps {
    sources: Array<Isources>;
    source: {
        id: string;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}
export interface Isources {
    source: {
        id: string;
        name: string;
    };
}

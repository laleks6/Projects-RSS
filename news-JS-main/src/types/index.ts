export interface INewsAllProps {
    status: string;
    totalResult: number;
    articles?: Array<INewsProps>;
}
export interface INewsProps {
    sources?: Isources[];
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}
export interface Isources {
    sources: {
        id?: string;
        name?: string;
    };
}

export interface INewsAllProps {
    status: string;
    totalResult: number;
    articles?: INewsProps[] | undefined;
}
export interface INewsProps {
    sources?: INewsProps[];
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
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
export interface IOption {
    [key: string]: string;
}
export type Response = {
    ok: boolean;
    status: number;
    statusText: string;
};

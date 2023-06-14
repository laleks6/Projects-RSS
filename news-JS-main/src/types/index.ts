export interface INewsAllProps {
    status: string;
    totalResult: number;
    articles?: INewsProps[];
}
export interface INewsProps {
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

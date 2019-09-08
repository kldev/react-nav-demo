import { PageModel } from 'model/PageModel';

export type addPageType = (model: PageModel) => void;
export type selectPageByIdType = (id: string) => void;
export type setSelectedIndexType = (index: number) => void;

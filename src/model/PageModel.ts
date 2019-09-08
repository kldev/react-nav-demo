import { PageTypes } from './PageTypes';

export interface PageModel {
  id: string;
  title: string;
  type: PageTypes;
  text: string;
}

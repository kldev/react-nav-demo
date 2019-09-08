import { actionCreatorFactory } from 'typescript-fsa';
import { PageModel } from '../../model/PageModel';
const actionCreator = actionCreatorFactory('nav');

export const addPage = actionCreator<PageModel>('addPage');
export const removePage = actionCreator<string>('removePage');

export const setSelectedIndex = actionCreator<number>('setSelectedIndex');
export const selectPageById = actionCreator<string>('selectPageByIndex');

import { reducerWithInitialState } from 'typescript-fsa-reducers';
import * as actions from './actions';
import { PageModel } from '../../model/PageModel';

export interface NavState {
  pages: PageModel[];
  selectedIndex: number;
}

const initialState: NavState = {
  pages: [],
  selectedIndex: -1
};

export const navReducer = reducerWithInitialState(initialState)
  .caseWithAction(actions.addPage, (state, action) => {
    return { ...state, pages: [...state.pages, action.payload] };
  })
  .caseWithAction(actions.removePage, (state, action) => {
    return { ...state, pages: [...state.pages].filter(x => x.id !== action.payload) };
  })
  .caseWithAction(actions.selectPageById, (state, action) => {
    const index = state.pages.findIndex(x => x.id === action.payload);

    return { ...state, selectedIndex: index };
  })
  .caseWithAction(actions.setSelectedIndex, (state, action) => {
    return { ...state, selectedIndex: action.payload };
  })
  .build();

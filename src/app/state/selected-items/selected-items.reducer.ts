import {createReducer, on} from '@ngrx/store';
import {itemSelected} from './selected-items.actions';

/* L'état devenant plus complexe, l'ajout d'une interface ou d'une classe typant l'état est recommandé */
interface State {
  ids: number[];
  q: number;
}

const initialState: State = {
  ids: [],
  q: 0
};

export const selectedItemsReducer = createReducer(
  initialState,
  on(itemSelected, (state, {id}) => ({...state, ...{ids: [...state.ids, id]}}))
);

/* Ou :
 {
   const ids = [...state.ids, id];
   return {...state, ids};
 }
*/


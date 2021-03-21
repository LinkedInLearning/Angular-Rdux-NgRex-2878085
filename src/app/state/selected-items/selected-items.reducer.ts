import {createReducer, on} from '@ngrx/store';
import {itemSelected} from './selected-items.actions';

// interface !!

const initialState = {
  ids: [],
  q: 0
};

/*
 * DISCLAIMER :
 * exemple d'une copie superficielle alors que l'on aurait besoin d'une copie profonde
 * voir commit suivant pour la solution
 */
export const selectedItemsReducer = createReducer(
  initialState,
  on(itemSelected, (state, {id}) => {
    state.ids.push(id);
    return {...state};
  })
);

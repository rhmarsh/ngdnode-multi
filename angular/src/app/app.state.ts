import { Action } from '@ngrx/store';
import { Store } from './types';

export interface AppState {
    storeList: Store[];
}

export const STORES_RETRIEVED = 'STORES_RETRIEVED';
export class StoresRetrieved implements Action {
    type = STORES_RETRIEVED;
    constructor(readonly stores: Store[]) {}
}

export function storeListReducer(prevList: Store[] = [], action: Action) {
    switch (action.type) {
        case STORES_RETRIEVED:
            return (action as StoresRetrieved).stores;
        default:
            return prevList;
    }
}
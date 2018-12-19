import { Action } from '@ngrx/store';
import { Store } from '../types';
import * as appState from '../app.state';

export interface FormState {
    
}

export interface State extends appState.AppState {
    'form': FormState;
}

export function formReducer(state: FormState = {}, action: Action) {
    /* switch (action.type) {
        case 
    } */
    return state;
}
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { map, tap, switchMap } from 'rxjs/operators';

import { STORES_RETRIEVED, StoresRetrieved } from './app.state';
import { StoreService } from "./store.service";



@Injectable()
export class AppEffects { 
    constructor(private actions$: Actions, private storeService: StoreService) { }

    @Effect()
    storesRetrieved$ =  this.storeService.getStores().pipe(tap(storeList => console.log('got stores: ', storeList)), map(storeList => new StoresRetrieved(storeList))); 
     /* this.actions$.ofType(STORES_RETRIEVED).pipe(
        switchMap(() => this.storeService.getStores()), tap(storeList => console.log('Refresh store list: ', storeList)),
        map(storeList => new StoresRetrieved(storeList)));  */
 }
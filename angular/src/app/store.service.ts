import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';
import { combineLatest, from, Observable, of} from 'rxjs';

import { Store } from './types';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  getStores(): Observable<Store[]> {
      let stores = new Array<Store>();
      stores.push({id: 1, storeNbr: 11, storeNme: 'Store 1, WA', state: 'WA'});
      stores.push({id: 2, storeNbr: 22, storeNme: 'Store 2, NC', state: 'NC'});
      stores.push({id: 3, storeNbr: 33, storeNme: 'Store 3, NC', state: 'NC'});
    return of(stores);
  }

}
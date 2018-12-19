import { Component, OnInit, ViewChild } from '@angular/core';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

import { Store as Stores } from '../types';

@Component({
    selector: 'table-comp',
    templateUrl: './table.component.html'
})
export class TableComponent implements OnInit { 
    storeList: Observable<Stores[]>;
    displayedColumns:  string[] = ['id', 'storeNme', 'storeNbr', 'state'];
    stores = new MatTableDataSource<Stores>();

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    constructor(private router: Router, private store: Store<AppState>) {
        this.storeList = store.select(s => s.storeList);
        this.storeList.subscribe(s => this.stores.data = s);
    }

    ngOnInit() {
        this.stores.paginator = this.paginator;
        this.stores.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.stores.filter = filterValue.trim().toLowerCase();
    }
}

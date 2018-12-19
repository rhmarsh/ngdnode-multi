import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { MatPaginatorModule, MatSortModule, MatInputModule } from '@angular/material';

import { MatTableModule } from '@angular/material/table';

import { TableComponent } from './table.component';

const tableRoutes: Routes = [
    { path: '', component: TableComponent }
];

@NgModule({
    declarations: [
        TableComponent
    ],
    imports: [
        CommonModule,
        //BrowserAnimationsModule,
        RouterModule.forChild(tableRoutes),
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule
    ]
})

export class TableModule { }
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './form.component';
import { FormState } from './form.state';
import { StoreModule } from '@ngrx/store';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

const formRoutes: Routes = [
    { path: '', component: FormComponent }
];

@NgModule({
    declarations: [
        FormComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        RouterModule.forChild(formRoutes)/* ,
        StoreModule.forFeature('form', FormState) */
    ]
})

export class FormModule { }
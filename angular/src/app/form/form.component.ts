import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'form-comp',
    templateUrl: './form.component.html'
})
export class FormComponent { 
    details: FormGroup;
    areaOrZone = new FormControl('Patch Area', Validators.required);
    minDate = new Date();

    constructor(fb: FormBuilder) {
        this.details = fb.group({
            promoID: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]] ,
            promoDesc: ['', [Validators.required, Validators.minLength(20)]],
            areaOrZoneDesc: ['', Validators.required],
            itemNbr: ['', [Validators.required, Validators.pattern(/^\d{7}$/)]],
            startDate: ['', Validators.required],
            endDate: ['', Validators.required] 
        });
    }

    savePromo() { }
}
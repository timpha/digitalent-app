import { Injectable } from '@angular/core';
import {ValidatorService} from 'angular4-material-table';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PersonValidatorService implements ValidatorService {

  getRowValidator(): FormGroup {
    return new FormGroup({
      'name': new FormControl(null, Validators.required),
      'age': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'curreq': new FormControl(null, Validators.required)
    });
  }

  constructor() { }
}

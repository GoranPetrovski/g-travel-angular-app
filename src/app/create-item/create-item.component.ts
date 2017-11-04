import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      city: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      locationCity: ['', Validators.required],
      destionationCity: ['', Validators.required],
      hours: ['', Validators.required],
      minutes: ['', Validators.required],
    });

    this.showSnackBar();
  }

  showSnackBar(): void {
    const config: any = new MatSnackBarConfig();
    config.duration = 3500;
    this.snackBar.open('Opps what happends', 'OK', config);
  }

  locationCity: string;
  destionationCity: string;
  hours: number;
  minutes: string;

  cities = [{
    name: 'Skopje' 
  },{
    name: 'Probistip'
  },{
    name: 'Bitola'
  }, {
    name: 'Ohrid'
  }];

  timeHours= [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

  timeMinutes= ["00", "5", "10", "15", "30", "45", "50"];

  
}



  

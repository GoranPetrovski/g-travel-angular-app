import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

import { travels } from "../mock-data/travels";

@Component({
    selector: 'app-travel-card',
    templateUrl: './travel-card.component.html',
    styleUrls: ['./travel-card.component.css']
})
export class TravelCardComponent implements OnInit {
    public myTravels;

    ngOnInit() { 
        
        this.myTravels = travels;
        console.log("Travels==", this.myTravels);
    }   


}





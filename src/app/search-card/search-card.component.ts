import { Component, OnInit } from '@angular/core';
import { SearchCardInterface } from './search-card.interface';
import {SearchService} from './search.service';


@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {
  model: SearchCardInterface;

  constructor(private service: SearchService) { }

  ngOnInit() {
    this.model = {tripType: '0', origin: 'Bangalore', destination: 'Hyderabad', departureDate: new Date(),
    arrivalDate: new Date()};
  }

  onSubmit() {
    this.service.getSearchResults(this.model);
  }

  travelDate: string;

  selectDate = [
    'Date',
    'Perid',
  ];

  selectedValue: string;
  locationCity: string;
  destionationCity: string;

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  cities = [{
    name: 'Skopje' 
  },{
    name: 'Probistip'
  },{
    name: 'Bitola'
  }, {
    name: 'Ohrid'
  }];
}

import { Component, OnInit } from '@angular/core';
import { SearchCardInterface } from './search-card.interface';
import {SearchService} from './search.service';
import {cities} from '../mock-data/cities';


@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {
  model: SearchCardInterface;
  private cities;

  constructor(private service: SearchService) { }

  ngOnInit() {
    this.model = {tripType: '0', origin: 'Bangalore', destination: 'Hyderabad', departureDate: new Date(),
    arrivalDate: new Date()};
    this.cities = cities
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
  
}

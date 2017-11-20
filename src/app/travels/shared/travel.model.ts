import { User } from './user.model';
import { Car } from './car.model';
import { City } from './city.model';

export class Travel {

  constructor(public id: string,
    public user: User,
    public car: Car,
    public title: string,
    public toDestination: City,
    public dateToTravel: Date,
    public HourFromTravel: number,
    public MinutesFromTravel:number,
    public HourToTravel: number,
    public MinutesToTravel:number,
    public alterEgo: string,
    public likes: number) {
  }
}
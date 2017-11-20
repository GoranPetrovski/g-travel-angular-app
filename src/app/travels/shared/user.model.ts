import { City } from './city.model';

export class User {
    constructor(public id: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public phoneNumber: string,
        public city: City) { }

}
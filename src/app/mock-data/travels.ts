import { Travel } from '../travels/shared/travel.model';
import { cars } from './cars';
import { cities } from './cities';
import { userG } from './users';


const travel1: Travel = {
    id: "t1",
    car: cars[0],
    user: userG,
    title: "Baram prevoz itno...",
    toDestination: cities[0],
    dateToTravel: new Date(),
    HourFromTravel: 17,
    MinutesFromTravel: 15,
    HourToTravel: 18,
    MinutesToTravel: 30,
    alterEgo: "ego",
    likes: 5
};

const travel2: Travel = {
    id: "t2",
    car: cars[1],
    user: userG,
    title: "Baram prevoz itno...",
    toDestination: cities[2],
    dateToTravel: new Date(),
    HourFromTravel: 10,
    MinutesFromTravel: 15,
    HourToTravel: 11,
    MinutesToTravel: 30,
    alterEgo: "ego",
    likes: 9
};

const travels: Travel[] = [
    travel1,
    travel2
];
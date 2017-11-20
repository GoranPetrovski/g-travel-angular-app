import { User } from '../travels/shared/user.model';
import uuid = require("uuid");


const userG: User = {
    id: uuid.v4(),
    firstName: "Goran",
    lastName: "Petrovski",
    email: "goksi@gmail.com",
    phoneNumber: "077333333",
    city: { id: "123j2", name: "Probistip" }
}
const users: User[] = [];
users.push(userG);

export = users;
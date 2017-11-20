import { User } from '../travels/shared/user.model';

export const userG: User = {
    id: "u1",
    firstName: "Goran",
    lastName: "Petrovski",
    email: "goksi@gmail.com",
    phoneNumber: "077333333",
    city: { id: "123j2", name: "Probistip" }
}
const users: User[] = [];
users.push(userG);

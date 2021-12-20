import { PersonInterface } from "./Person.interface";

export interface BankerInterface extends PersonInterface {
    employee_number: string;
}
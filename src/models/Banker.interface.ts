import { PersonInterface } from "./person.interface";

export interface BankerInterface extends PersonInterface {
    employee_number: string;
}
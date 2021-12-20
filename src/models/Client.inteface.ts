import { PersonInterface } from "./Person.interface";

export interface ClientInterface extends PersonInterface {
    balance: string;
    is_active: boolean;
    additional_info?: any;
    card_number: string;
    family_members: string[];
}
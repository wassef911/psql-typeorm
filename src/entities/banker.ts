import { Entity, Column } from "typeorm";
import { Person } from "./utils/person";

@Entity("client")
export class Banker extends Person {

    @Column({ unique: true })
    employee_number: number;

}
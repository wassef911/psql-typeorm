import { BaseEntity, Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Person } from "./utils/person";

@Entity("client")
export class Client extends Person {

    @Column({ type: "numeric" })
    balance: number;

    @Column({
        default: true,
    })
    is_active: boolean;

    @Column({ type: "simple-json" })
    additional_info: {
        age: number;
        hari_color: string;
    }

    @Column({ type: "simple-json" })
    family_members: string[];

}
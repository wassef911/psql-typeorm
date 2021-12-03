import { BaseEntity, Entity, Column } from "typeorm";

@Entity("client")
export class Client extends BaseEntity {
    @Column()
    first_name: string;
    @Column()
    last_name: string;
    @Column({
        unique: true,
    })
    email: string;
    @Column({ unique: true, length: 10 })
    card_number: string
    @Column({ type: "numeric" })
    balance: number;
    @Column({
        default: true,
    })
    is_active: boolean;
    @Column({ type: "simple-json" })
    additional_info: {
        age: number,
    }
}
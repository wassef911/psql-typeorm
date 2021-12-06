import { Entity, Column, OneToMany, ManyToMany } from 'typeorm';

import { Banker } from './Banker';
import { Transactions } from './Transactions';
import { Person } from './utils/Person';

@Entity('client')
export class Client extends Person {
  @Column({ type: 'numeric' })
  balance: number;

  @Column({
    default: true,
  })
  is_active: boolean;

  @Column({ type: 'simple-json' })
  additional_info: {
    age: number;
    hari_color: string;
  };

  @Column({ type: 'simple-json' })
  family_members: string[];

  @OneToMany(() => Transactions, (t) => t.client) transactions: Transactions[];

  @ManyToMany(() => Banker) bankers: Banker[]
}

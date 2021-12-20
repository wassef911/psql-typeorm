import { Entity, Column, OneToMany, ManyToMany, UpdateDateColumn, CreateDateColumn } from 'typeorm';

import { Banker } from './Banker';
import { Transaction } from './Transaction';
import { Person } from './utils/Person';

@Entity('client')
export class Client extends Person {
  @Column({
    type: 'numeric',
    default: 0,
  })
  balance: number;

  @Column({
    name: 'active',
    default: true,
  })
  is_active: boolean;

  @Column({
    type: 'simple-json',
    nullable: true,
  })
  additional_info: {
    age: number;
    hair_color: string;
  };

  @Column({ type: 'simple-array', default: [] })
  family_members: string[];

  @Column({
    unique: true,
    length: 10,
  })
  card_number: string;

  @ManyToMany((type) => Banker, {
    cascade: true,
  })
  bankers: Banker[];

  @OneToMany(
    () => Transaction,
    (transaction) => transaction.client,
    {
      onDelete: "CASCADE"
    }
  )
  transactions: Transaction[];
}

import {
  BaseEntity,
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Client } from './Client';

export enum TransactionTypes {
  DEPOSIT = 'desposit',
  WITHDRAW = 'withdraw',
}

@Entity('client')
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: TransactionTypes,
  })
  type: string;

  @Column({
    type: 'numeric',
  })
  amount: string;

  @ManyToMany(() => Client)
  @JoinTable({
    name: 'bankers_clients',
    joinColumn: { name: 'banker', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'client', referencedColumnName: 'id' },
  })
  clients: Client[];

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Client, (client) => client.transactions)
  @JoinColumn({
    name: 'client_id',
  })
  client: Client;
}

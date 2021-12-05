import { BaseEntity, Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Client } from './Client';

export enum TransactionTypes {
  DEPOSIT = 'desposit',
  WITHDRAW = 'withdraw'
}

@Entity('client')
export class Transactions extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: TransactionTypes
  })
  type: string;

  @Column({
    type: 'numeric'
  })
  amount: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(
    () => Client, client => client.transactions
  )

  @JoinColumn({
    name: 'client_id'
  })
  client: Client
}

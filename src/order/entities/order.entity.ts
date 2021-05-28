import { Field, ObjectType } from '@nestjs/graphql';
import { v4 as uuidv4 } from 'uuid';
import {
  Entity,
  Column,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Order {
  @Field()
  @ObjectIdColumn()
  _id: string;

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  invoiceID: string;
  
  @Field({ nullable: true })
  @Column()
  feedback?: string;
}

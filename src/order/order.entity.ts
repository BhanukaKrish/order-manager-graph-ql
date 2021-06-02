 
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongodb';
import {
  Collection,
  Entity,
  Filter,
  ManyToMany,
  Property,
  PrimaryKey,
  BaseEntity,
  SerializedPrimaryKey,
} from '@mikro-orm/core';
 

@ObjectType()
@InputType('OrderFeedbackInput')
export class OrderFeedback {
  @Field({ nullable: true })
  review?: string;
}

@ObjectType()
@InputType('OrderInput')
@Entity()
export class Order {
  @PrimaryKey()
  _id: ObjectId;

  @Field(() => String)
  @SerializedPrimaryKey()
  @PrimaryKey()
  id: string;

  @Field()
  @Property()
  invoiceID: string;

  @Field(() => OrderFeedback, { nullable: true })
  @Property({ nullable: true })
  feedback?: OrderFeedback;
}

import {
  Entity,
  PrimaryKey,
  Property,
  SerializedPrimaryKey,
} from '@mikro-orm/core';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongodb';

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

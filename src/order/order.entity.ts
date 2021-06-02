import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { ObjectId } from 'mongodb';
// import { Entity, BaseEntity, ObjectID } from '@mikro-orm/core';
// import { Entity, Column, BaseEntity, ObjectIdColumn, ObjectID } from '@mikro-orm/core';
import {
  Collection,
  Entity,
  Filter,
  ManyToMany,
  Property,
  PrimaryKey,
  BaseEntity,
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
  @Field(() => String)
  @PrimaryKey()
  id: ObjectId;

  @Field()
  @Property()
  invoiceID: string;

  @Field(() => OrderFeedback, { nullable: true })
  @Property({ nullable: true })
  feedback?: OrderFeedback;
}

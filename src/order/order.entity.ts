import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { Entity, Column, BaseEntity, ObjectIdColumn, ObjectID } from 'typeorm';

@ObjectType()
@InputType('OrderFeedbackInput')
export class OrderFeedback {
  @Field({ nullable: true })
  review?: string;
}

@ObjectType()
@InputType('OrderInput')
@Entity()
export class Order extends BaseEntity {
  @Field(() => String)
  @ObjectIdColumn()
  id: ObjectID;

  @Field()
  @Column()
  invoiceID: string;

  @Field(() => OrderFeedback, { nullable: true })
  @Column({ nullable: true })
  feedback?: OrderFeedback;
}

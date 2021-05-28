import { InputType, Int, Field } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';

@InputType()
export class CreateOrderInput {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Field()
  invoiceID: string;

  @Field()
  feedback: string;
}

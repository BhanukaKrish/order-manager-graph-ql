import { CreateOrderInput } from './create-order.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrderInput {
  @Field()
  id: string
  
  @Field()
  feedback: string;
}

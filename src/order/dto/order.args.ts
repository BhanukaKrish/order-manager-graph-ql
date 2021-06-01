import { Field, ArgsType, PickType, InputType } from '@nestjs/graphql';
import { Order } from '../order.entity';

@ArgsType()
class OrderArgs extends Order {} // Converts entity to Args

@InputType()
class OrderInput extends Order {} // Converts entity to Input

const CreateUpdateInputArgs = PickType(OrderArgs, ['invoiceID', 'feedback']); // Try to make this generic
const CreateUpdateInput = PickType(OrderInput, ['invoiceID', 'feedback']); // Try to make this generic

@ArgsType()
export class CreateOrderInputArgs extends CreateUpdateInputArgs {}

@InputType()
export class UpdateOrderInput extends CreateUpdateInput {}

@ArgsType()
export class UpdateOrderInputArgs {
  @Field(() => UpdateOrderInput)
  data: UpdateOrderInput;
  @Field()
  where: string;
}

@ArgsType()
export class DeleteOrderInputArgs {
  id: string;
}

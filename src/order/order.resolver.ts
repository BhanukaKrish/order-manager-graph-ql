import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { Order } from './order.entity';
import {
  CreateOrderInputArgs,
  DeleteOrderInputArgs,
  UpdateOrderInputArgs,
} from './dto';

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Mutation(() => Order)
  createOrder(@Args() createOrderInputArgs: CreateOrderInputArgs) {
    return this.orderService.create(createOrderInputArgs);
  }

  @Query(() => [Order], { name: 'orders' })
  findAll() {
    return this.orderService.findAll();
  }

  @Query(() => Order, { name: 'order' })
  findOne(@Args('id') id: string) {
    return this.orderService.findOne(id);
  }

  @Mutation(() => Order)
  updateOrder(@Args() updateOrderInputArgs: UpdateOrderInputArgs) {
    return this.orderService.update(updateOrderInputArgs);
  }

  @Mutation(() => Boolean)
  deleteOrder(@Args() deleteOrderInputArgs: DeleteOrderInputArgs) {
    return this.orderService.remove(deleteOrderInputArgs);
  }
}

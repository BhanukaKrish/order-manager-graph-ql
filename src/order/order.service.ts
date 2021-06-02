import { EntityRepository, wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import {
  CreateOrderInputArgs,
  DeleteOrderInputArgs,
  UpdateOrderInputArgs,
} from './dto';
import { Order } from './order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private orderRepository: EntityRepository<Order>,
  ) {}

  async create(createOrderInputArgs: CreateOrderInputArgs): Promise<Order> {
    const order = new Order();
    wrap(order).assign(createOrderInputArgs);
    this.orderRepository.persist(order);
    await this.orderRepository.flush();
    return order;
  }

  async findAll(): Promise<Order[]> {
    return this.orderRepository.findAll();
  }

  async findOne(id: string): Promise<Order> {
    return this.orderRepository.findOne(id);
  }

  async update({ data, where }: UpdateOrderInputArgs): Promise<Order> {
    const order = await this.findOne(where);
    wrap(order).assign(data);
    this.orderRepository.persist(order);
    await this.orderRepository.flush;
    return order;
  }

  async remove({ id }: DeleteOrderInputArgs): Promise<Boolean> {
    const order = this.findOne(id);
    this.orderRepository.remove(order);
    return true;
  }
}

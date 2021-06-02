import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
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
    return await this.orderRepository.create(createOrderInputArgs).save();
  }

  async findAll(): Promise<Order[]> {
    return this.orderRepository.find();
  }

  async findOne(id: string): Promise<Order> {
    return this.orderRepository.findOne(id);
  }

  async update({ data, where }: UpdateOrderInputArgs): Promise<Order> {
    await this.orderRepository.update(where, data);
    return this.findOne(where);
  }

  async remove({ id }: DeleteOrderInputArgs): Promise<Boolean> {
    await this.orderRepository.delete(id);
    return true;
  }
}

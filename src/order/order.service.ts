import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>
  ) {}

  create(order: CreateOrderInput): Promise<Order> {
    let proj = this.orderRepository.create(order);
    return this.orderRepository.save(proj); 
  }

  async findAll(): Promise<Order[]> {
    return this.orderRepository.find();
  }

  async findOne(id: string): Promise<Order> {
    return this.orderRepository.findOne(id);
  }

  update(id: string, updateOrderInput: UpdateOrderInput) {
    let order: Order = this.orderRepository.create(updateOrderInput);
    order.id = id;
    return this.orderRepository.save(order);
  }

  async remove(id: string) {
    let proj = this.findOne(id)
    if (proj) {
      let ret = await this.orderRepository.delete(id)
      if (ret.affected === 1) {
        return proj;
      }
    }
    throw new NotFoundException(`Record cannot find by id ${id}`)
  }
}

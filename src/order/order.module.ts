import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [MikroOrmModule.forFeature([Order])],
  providers: [OrderResolver, OrderService],
})
export class OrderModule {}

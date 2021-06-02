import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Order } from './order.entity';
import { OrderResolver } from './order.resolver';
import { OrderService } from './order.service';

@Module({
  imports: [MikroOrmModule.forFeature([Order])],
  providers: [OrderResolver, OrderService],
})
export class OrderModule {}

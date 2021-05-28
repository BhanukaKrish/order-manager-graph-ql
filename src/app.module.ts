import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { Order } from './order/entities/order.entity';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    OrderModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://root:Aiva@123@cluster0.sa2bq.mongodb.net/order_db?retryWrites=true&w=majority',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Order],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

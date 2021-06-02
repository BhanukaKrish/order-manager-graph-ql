import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { Order } from './order/order.entity';
import { OrderModule } from './order/order.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [
    OrderModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
    }),
    MikroOrmModule.forRoot({
      type: 'mongo',
      dbName: 'order_db',
      clientUrl: 'mongodb+srv://root:Aiva@123@cluster0.sa2bq.mongodb.net/order_db?retryWrites=true&w=majority',
      entities: [Order],
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}


// mongodb+srv://nusky:Amb1UKMlUCoTCG8n@cluster0.cn9ki.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { Order } from './order/order.entity';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    OrderModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
    }),
    MikroOrmModule.forRoot({
      type: 'mongo',
      dbName: 'order_db',
      clientUrl:
        'mongodb+srv://root:Aiva@123@cluster0.sa2bq.mongodb.net/order_db?retryWrites=true&w=majority',
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

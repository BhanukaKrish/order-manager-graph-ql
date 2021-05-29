import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { Order } from './order/order.entity';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    OrderModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://nusky:Amb1UKMlUCoTCG8n@cluster0.cn9ki.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      synchronize: false,
      useUnifiedTopology: true,
      entities: [Order],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

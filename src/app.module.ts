import { env } from './config';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [ItemsModule, MongooseModule.forRoot(env.MONGO_URL)],
  controllers: [],
  providers: [],
})
export class AppModule {}

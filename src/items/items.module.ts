import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModel } from './model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemsModel }])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}

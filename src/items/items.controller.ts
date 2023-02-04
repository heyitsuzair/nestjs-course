import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto';
import { ItemsInterface } from './interfaces';
import { ItemsService } from './items.service';

@Controller('api/items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  findAll(): Promise<ItemsInterface[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<ItemsInterface> {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateItemDto): Promise<ItemsInterface> {
    return this.itemsService.create(dto);
  }
  @Put(':id')
  update(@Body() dto: CreateItemDto, @Param('id') id): Promise<ItemsInterface> {
    return this.itemsService.update(dto, id);
  }
  @Delete(':id')
  delete(@Param('id') id): Promise<ItemsInterface> {
    return this.itemsService.delete(id);
  }
}

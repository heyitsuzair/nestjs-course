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
  findAll(): ItemsInterface[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): ItemsInterface {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateItemDto): string {
    return `Create ${dto.name}`;
  }
  @Put(':id')
  update(@Body() dto: CreateItemDto, @Param('id') id): string {
    return `update ${id}`;
  }
  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ItemsInterface } from './interfaces';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel('Item') private readonly itemModel: Model<ItemsInterface>,
  ) {}
  async findAll(): Promise<ItemsInterface[]> {
    return await this.itemModel.find();
  }
  async findOne(id: string): Promise<ItemsInterface> {
    try {
      return await this.itemModel.findById(id);
    } catch (error) {
      let errorMessage = '';
      errorMessage = error.kind === 'ObjectId' && 'Item Not Found';
      return errorMessage || error;
    }
  }
  async create(dto: ItemsInterface): Promise<ItemsInterface> {
    const fields = {
      name: dto.name,
      description: dto.description,
      qty: dto.qty,
    };
    const newItem = await this.itemModel.create(fields);
    return newItem;
  }
  async delete(id: string): Promise<ItemsInterface> {
    const newItem = await this.itemModel.findByIdAndDelete(id);
    return newItem;
  }
  async update(dto: ItemsInterface, id: string): Promise<ItemsInterface> {
    const fields = {
      name: dto.name,
      description: dto.description,
      qty: dto.qty,
    };
    const updatedItem = await this.itemModel.findByIdAndUpdate(id, fields);
    return updatedItem;
  }
}

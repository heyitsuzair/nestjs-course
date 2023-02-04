import { Injectable } from '@nestjs/common';
import { ItemsInterface } from './interfaces';

@Injectable()
export class ItemsService {
  private readonly items: ItemsInterface[] = [
    {
      id: '1',
      name: 'Uzair',
      description: 'wdpfnnfene',
      qty: 11,
    },
    {
      id: '2',
      name: 'Uzair 2',
      description: 'wdpfnnfene',
      qty: 12,
    },
    {
      id: '3',
      name: 'Uzair 3',
      description: 'wdpfnnfene',
      qty: 13,
    },
  ];

  findAll(): ItemsInterface[] {
    return this.items;
  }
  findOne(id: string): ItemsInterface {
    return this.items.find((item) => item.id === id);
  }
}

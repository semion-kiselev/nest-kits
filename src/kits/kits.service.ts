import { Injectable } from '@nestjs/common';
import { Kit, KitDto, KitType, ScaleType } from './types';

@Injectable()
export class KitsService {
  kits: Kit[] = [
    {
      id: 1,
      article: '001',
      type: KitType.PLASTIC,
      scale: ScaleType.MIDDLE,
      name: 'Kit001',
      description: 'Kit001 description',
      isActive: true,
    },
    {
      id: 2,
      article: '002',
      type: KitType.PLASTIC,
      scale: ScaleType.MIDDLE,
      name: 'Kit002',
      description: 'Kit002 description',
      isActive: true,
    }
  ];

  findAll(): Kit[] {
    return this.kits;
  }

  findOne(id: number): Kit | undefined {
    return this.kits.find((kit: Kit) => kit.id === id);
  }

  create(kit: KitDto): Kit {
    const newKit = {
      id: this.kits.length > 0 ? Math.max(...this.kits.map(hero => hero.id)) + 1 : 1,
      ...kit,
    };

    this.kits.push(newKit);
    return newKit;
  }

  update(id: number, kit: KitDto): Kit | undefined {
    const kitIndexToUpdate = this.kits.findIndex((kit: Kit) => kit.id === id);
    if (kitIndexToUpdate === -1) {
      return undefined;
    }

    const kitToUpdate = this.kits[kitIndexToUpdate];
    const updatedKit = {...kitToUpdate, ...kit};

    this.kits = [
      ...this.kits.slice(0, kitIndexToUpdate),
      updatedKit,
      ...this.kits.slice(kitIndexToUpdate + 1),
    ];

    return updatedKit;
  }

  remove(id: number): Kit {
    const kitIndexToRemove = this.kits.findIndex((kit: Kit) => kit.id === id);
    if (kitIndexToRemove === -1) {
      return undefined;
    }

    const kitToRemove = this.kits[kitIndexToRemove];
    this.kits = [
      ...this.kits.slice(0, kitIndexToRemove),
      ...this.kits.slice(kitIndexToRemove + 1),
    ];

    return kitToRemove;
  }
}

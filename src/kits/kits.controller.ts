import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { KitDto } from './types';
import { KitsService } from './kits.service';

@Controller('api/kits')
export class KitsController {
  constructor(private kitsService: KitsService) {
  }

  @Get()
  findAll() {
    return this.kitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const kit = this.kitsService.findOne(Number(id));
    if (!kit) {
      throw new NotFoundException();
    }
    return kit;
  }

  @Post()
  create(@Body() kitDto: KitDto) {
    // todo: validate body
    return this.kitsService.create(kitDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() kitDto: KitDto) {
    // todo: validate body
    const updatedKit = this.kitsService.update(Number(id), kitDto);
    if (!updatedKit) {
      throw new NotFoundException();
    }
    return updatedKit;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const removedKit = this.kitsService.remove(Number(id));
    if (!removedKit) {
      throw new NotFoundException();
    }
    return removedKit;
  }
}

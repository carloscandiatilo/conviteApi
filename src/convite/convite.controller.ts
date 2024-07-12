import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConviteService } from './convite.service';
import { CreateConviteDto } from './dto/create-convite.dto';
import { UpdateConviteDto } from './dto/update-convite.dto';

@Controller('convite')
export class ConviteController {
  constructor(private readonly conviteService: ConviteService) {}

  @Post()
  create(@Body() createConviteDto: CreateConviteDto) {
    return this.conviteService.create(createConviteDto);
  }

  @Get()
  findAll() {
    return this.conviteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conviteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConviteDto: UpdateConviteDto) {
    return this.conviteService.update(+id, updateConviteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conviteService.remove(+id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateConviteDto } from './dto/create-convite.dto';
import { UpdateConviteDto } from './dto/update-convite.dto';

@Injectable()
export class ConviteService {
  create(createConviteDto: CreateConviteDto) {
    return 'This action adds a new convite';
  }

  findAll() {
    return `This action returns all convite`;
  }

  findOne(id: number) {
    return `This action returns a #${id} convite`;
  }

  update(id: number, updateConviteDto: UpdateConviteDto) {
    return `This action updates a #${id} convite`;
  }

  remove(id: number) {
    return `This action removes a #${id} convite`;
  }
}

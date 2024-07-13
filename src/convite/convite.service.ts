import { Injectable } from '@nestjs/common';
import { CreateConviteDto } from './dto/create-convite.dto';
import { UpdateConviteDto } from './dto/update-convite.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Convite } from './entities/convite.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConviteService {

  constructor(
    @InjectRepository(Convite)
    private readonly conviteRepository: Repository<Convite>,
  ){}

  create(createConviteDto: CreateConviteDto) {
    return this.conviteRepository.save(createConviteDto)
  }

  findAll() {
    return this.conviteRepository.find();
  }

  findOne(id: number) {
    return this.conviteRepository.findOneBy({id});
  }

  delete(id: number) {
    return this.conviteRepository.softDelete(id);
  }

  update(id: number, updateConviteDto: UpdateConviteDto) {
    return this.conviteRepository.update(id, updateConviteDto)
  }

  remove(id: number) {
    return this.conviteRepository.delete(id)
  }
}

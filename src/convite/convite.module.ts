import { Module } from '@nestjs/common';
import { ConviteService } from './convite.service';
import { ConviteController } from './convite.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Convite } from './entities/convite.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Convite])],
  controllers: [ConviteController],
  providers: [ConviteService],
})
export class ConviteModule {}

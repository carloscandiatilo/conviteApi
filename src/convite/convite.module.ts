import { Module } from '@nestjs/common';
import { ConviteService } from './convite.service';
import { ConviteController } from './convite.controller';

@Module({
  controllers: [ConviteController],
  providers: [ConviteService],
})
export class ConviteModule {}

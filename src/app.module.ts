import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConviteModule } from './convite/convite.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: "root",
      database: "convite_api_nestjs",
      entities: [],
      synchronize: true
    }),
    ConviteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

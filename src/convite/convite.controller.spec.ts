import { Test, TestingModule } from '@nestjs/testing';
import { ConviteController } from './convite.controller';
import { ConviteService } from './convite.service';

describe('ConviteController', () => {
  let controller: ConviteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConviteController],
      providers: [ConviteService],
    }).compile();

    controller = module.get<ConviteController>(ConviteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

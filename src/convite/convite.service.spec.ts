import { Test, TestingModule } from '@nestjs/testing';
import { ConviteService } from './convite.service';

describe('ConviteService', () => {
  let service: ConviteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConviteService],
    }).compile();

    service = module.get<ConviteService>(ConviteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

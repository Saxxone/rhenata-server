import { Test, TestingModule } from '@nestjs/testing';
import { DiseaseConditionService } from './disease-condition.service';

describe('DiseaseConditionService', () => {
  let service: DiseaseConditionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiseaseConditionService],
    }).compile();

    service = module.get<DiseaseConditionService>(DiseaseConditionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { DiseaseConditionController } from './disease-condition.controller';
import { DiseaseConditionService } from './disease-condition.service';

describe('DiseaseConditionController', () => {
  let controller: DiseaseConditionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiseaseConditionController],
      providers: [DiseaseConditionService],
    }).compile();

    controller = module.get<DiseaseConditionController>(DiseaseConditionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

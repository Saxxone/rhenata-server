import { Module } from '@nestjs/common';
import { DiseaseConditionService } from './disease-condition.service';
import { DiseaseConditionController } from './disease-condition.controller';

@Module({
  controllers: [DiseaseConditionController],
  providers: [DiseaseConditionService]
})
export class DiseaseConditionModule {}

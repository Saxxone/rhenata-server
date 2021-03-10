import { PartialType } from '@nestjs/mapped-types';
import { CreateDiseaseConditionDto } from './create-disease-condition.dto';

export class UpdateDiseaseConditionDto extends PartialType(CreateDiseaseConditionDto) {}

import { Injectable } from '@nestjs/common';
import { CreateDiseaseConditionDto } from './dto/create-disease-condition.dto';
import { UpdateDiseaseConditionDto } from './dto/update-disease-condition.dto';

@Injectable()
export class DiseaseConditionService {
  create(createDiseaseConditionDto: CreateDiseaseConditionDto) {
    return 'This action adds a new diseaseCondition';
  }

  findAll() {
    return `This action returns all diseaseCondition`;
  }

  findOne(id: number) {
    return `This action returns a #${id} diseaseCondition`;
  }

  update(id: number, updateDiseaseConditionDto: UpdateDiseaseConditionDto) {
    return `This action updates a #${id} diseaseCondition`;
  }

  remove(id: number) {
    return `This action removes a #${id} diseaseCondition`;
  }
}

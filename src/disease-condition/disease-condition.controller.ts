import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiseaseConditionService } from './disease-condition.service';
import { CreateDiseaseConditionDto } from './dto/create-disease-condition.dto';
import { UpdateDiseaseConditionDto } from './dto/update-disease-condition.dto';

@Controller('disease-condition')
export class DiseaseConditionController {
  constructor(private readonly diseaseConditionService: DiseaseConditionService) {}

  @Post()
  create(@Body() createDiseaseConditionDto: CreateDiseaseConditionDto) {
    return this.diseaseConditionService.create(createDiseaseConditionDto);
  }

  @Get()
  findAll() {
    return this.diseaseConditionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diseaseConditionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiseaseConditionDto: UpdateDiseaseConditionDto) {
    return this.diseaseConditionService.update(+id, updateDiseaseConditionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diseaseConditionService.remove(+id);
  }
}

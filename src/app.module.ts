import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HospitalModule } from './hospital/hospital.module';
import { AdminModule } from './admin/admin.module';
import { PatientModule } from './patient/patient.module';
import { PersonnelModule } from './personnel/personnel.module';
import { SymptomsModule } from './symptoms/symptoms.module';
import { SignsModule } from './signs/signs.module';
import { DiseaseConditionModule } from './disease-condition/disease-condition.module';

@Module({
  imports: [HospitalModule, AdminModule, PatientModule, PersonnelModule, SymptomsModule, SignsModule, DiseaseConditionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

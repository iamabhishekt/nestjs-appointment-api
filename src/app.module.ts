import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentsModule } from './appointments/appointments.module';
import { SpecialitiesModule } from './specialities/specialities.module';
import { SchedulesModule } from './schedules/schedules.module';
import { PatientsModule } from './patients/patients.module';
import { DoctorsModule } from './doctors/doctors.module';
import { AppointmentsModule } from './appointments/appointments.module';

@Module({
  imports: [AppointmentsModule, DoctorsModule, PatientsModule, SchedulesModule, SpecialitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

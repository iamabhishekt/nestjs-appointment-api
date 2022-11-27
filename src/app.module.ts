import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentsModule } from './appointments/appointments.module';
import { PatientsModule } from './patients/patients.module';
import { ScheduleModule } from './schedule/schedule.module';
import { ContactsModule } from './contacts/contacts.module';
import { DoctorsModule } from './doctors/doctors.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [AppointmentsModule, PatientsModule, ScheduleModule, ContactsModule, DoctorsModule],
})
export class AppModule {}

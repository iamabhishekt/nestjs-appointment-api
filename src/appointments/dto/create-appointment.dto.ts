import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAppointmentDto {

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  appointmentId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  patientId: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  doctorId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  date: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  time: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  duration: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  location: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  reason: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  notes: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  status: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  created: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  updated: string;
}

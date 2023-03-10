import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsDateString,
  IsNumber,
} from 'class-validator';

export class CreateEventDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  creatorId: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  startMoment: Date;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  endMoment: Date;
}

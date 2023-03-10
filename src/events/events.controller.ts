import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Event } from '@prisma/client';
import { CreateEventDto } from './dto/CreateEvents';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly service: EventsService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createEventDto: CreateEventDto): Promise<Event> {
    return this.service.create(createEventDto);
  }
}

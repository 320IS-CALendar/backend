import { BadRequestException, Injectable } from '@nestjs/common';
import { Event, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EventsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.EventUncheckedCreateInput): Promise<Event> {
    if (data.startMoment >= data.endMoment) {
      throw new BadRequestException(
        'startMoment cannot be past or equal endMoment',
      );
    }
    return this.prisma.event.create({ data });
  }

  getAll(): Promise<Event[]> {
    return this.prisma.event.findMany();
  }

  get(where: Prisma.EventWhereUniqueInput): Promise<Event> {
    return this.prisma.event.findUnique({ where });
  }

  update(
    where: Prisma.EventWhereUniqueInput,
    data: Prisma.EventUpdateInput,
  ): Promise<Event> {
    return this.prisma.event.update({ where, data });
  }

  delete(where: Prisma.EventWhereUniqueInput) {
    return this.prisma.event.delete({ where });
  }
}

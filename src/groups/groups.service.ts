import { Injectable } from '@nestjs/common';
import { Group, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GroupsService {
  constructor(private readonly prisma: PrismaService) {}

  getAll(): Promise<Group[]> {
    return this.prisma.group.findMany();
  }

  get(where: Prisma.GroupWhereUniqueInput): Promise<Group> {
    return this.prisma.group.findUnique({ where });
  }

  create(data: Prisma.GroupCreateInput): Promise<Group> {
    return this.prisma.group.create({ data });
  }

  update(
    where: Prisma.GroupWhereUniqueInput,
    data: Prisma.GroupUpdateInput,
  ): Promise<Group> {
    return this.prisma.group.update({ where, data });
  }

  delete(where: Prisma.GroupWhereUniqueInput): Promise<Group> {
    return this.prisma.group.delete({ where });
  }
}

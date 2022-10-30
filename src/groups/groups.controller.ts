import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Group, Prisma } from '@prisma/client';
import { CreateGroupDto } from './dto/CreateGroup';
import { GroupsService } from './groups.service';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Get()
  getAllGroups(): Promise<Group[]> {
    return this.groupsService.getAll();
  }

  @Get(':id')
  getGroup(@Param('id', ParseIntPipe) id: number): Promise<Group> {
    return this.groupsService.get({ id });
  }

  @Post()
  createGroup(@Body() data: CreateGroupDto): Promise<Group> {
    return this.groupsService.create(data);
  }

  @Patch(':id')
  updateGroup(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: CreateGroupDto,
  ): Promise<Group> {
    return this.groupsService.update({ id }, data);
  }

  @Delete(':id')
  deleteGroup(@Param('id', ParseIntPipe) id: number): Promise<Group> {
    return this.groupsService.delete({ id });
  }
}

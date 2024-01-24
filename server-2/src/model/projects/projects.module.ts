import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { ProjectsRepository } from './projects.repository';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { Projects } from './projects.model';

@Module({
  imports: [SequelizeModule.forFeature([Projects])],
  controllers: [ProjectsController],
  providers: [ProjectsService, ProjectsRepository],
  exports: [SequelizeModule, ProjectsRepository, ProjectsService],
})
export class ProjectsModule {}

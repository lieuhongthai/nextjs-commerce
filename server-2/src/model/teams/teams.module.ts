import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Teams } from './teams.model';
import { Staffs } from '../staffs/staffs.model';

@Module({
  imports: [SequelizeModule.forFeature([Teams, Staffs])],
  controllers: [TeamsController],
  providers: [TeamsService],
  exports: [SequelizeModule],
})
export class TeamsModule {}

import { Module } from '@nestjs/common';
import { StaffsService } from './staffs.service';
import { StaffsController } from './staffs.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Staffs } from './staffs.model';

@Module({
  imports: [SequelizeModule.forFeature([Staffs])],
  controllers: [StaffsController],
  providers: [StaffsService],
})
export class StaffsModule {}

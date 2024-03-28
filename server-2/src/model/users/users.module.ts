import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './users.model';
import { Roles } from '../roles/roles.model';
import { UsersRepository } from './users.repository';

@Module({
  imports: [SequelizeModule.forFeature([Users, Roles])],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [SequelizeModule, UsersRepository, UsersService],
})
export class UsersModule {}

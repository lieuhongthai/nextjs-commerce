import { Module } from '@nestjs/common';
import { UsersController } from 'src/model/users/users.controller';
import { UsersModule } from 'src/model/users/users.module';
import { UsersService } from 'src/model/users/users.service';

@Module({
  imports: [UsersModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersHttpModule {}

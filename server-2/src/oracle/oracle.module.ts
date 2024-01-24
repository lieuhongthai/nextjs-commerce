import { Module } from '@nestjs/common';
import { OracleService } from './oracle.service';
import { OracleController } from './oracle.controller';
import { UsersModule } from 'src/model/users/users.module';
import { OracleRepository } from './oracle.repository';

@Module({
  imports: [UsersModule],
  controllers: [OracleController],
  providers: [OracleService, OracleRepository],
})
export class OracleModule {}

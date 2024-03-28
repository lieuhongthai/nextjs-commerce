import { Module } from '@nestjs/common';
import { LeadersService } from './leaders.service';
import { LeadersController } from './leaders.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Leaders } from './leaders.model';

@Module({
  imports: [SequelizeModule.forFeature([Leaders])],
  controllers: [LeadersController],
  providers: [LeadersService],
})
export class LeadersModule {}

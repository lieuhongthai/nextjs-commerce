import { Module } from '@nestjs/common';
import { RolesController } from 'src/model/roles/roles.controller';
import { RolesModule } from 'src/model/roles/roles.module';
import { RolesService } from 'src/model/roles/roles.service';

@Module({
  imports: [RolesModule],
  providers: [RolesService],
  controllers: [RolesController],
})
export class RolesHttpModule {}

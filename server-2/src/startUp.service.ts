import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Roles } from './model/roles/roles.model';
// import { RolesModelTypes, enumRoleName } from './types/models/roles/type';
@Injectable()
export class AppService implements OnModuleInit {
  @InjectModel(Roles)
  private rolesModel: typeof Roles;

  async onModuleInit() {
    console.log(`The module has been initialized.`);
    //  ** Dump data

    // const roles: RolesModelTypes[] = [
    //   {
    //     id: 1,
    //     name: enumRoleName.ADMINISTRATOR,
    //   },
    //   {
    //     id: 2,
    //     name: enumRoleName.PLANER,
    //   },
    //   {
    //     id: 3,
    //     name: enumRoleName.LEADER,
    //   },
    // ];
    // await this.rolesModel.bulkCreate(roles);
  }
}

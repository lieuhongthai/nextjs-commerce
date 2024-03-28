import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from './users.model';
import { Roles } from '../roles/roles.model';
import { FindOptions } from 'sequelize';
import { UsersModelTypes, enumActiveUser, enumTypeUsers } from 'src/types/models/users/type';

@Injectable()
export class UsersRepository {
  @InjectModel(Users)
  private userModel: typeof Users;

  @InjectModel(Roles)
  private roleModel: typeof Roles;

  async findAll(options?: FindOptions<UsersModelTypes>): Promise<Users[]> {
    return this.userModel.findAll(options);
  }

  findOne(id: string): Promise<Users> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async getUserByEmail(email: string, active = 1) {
    return await this.userModel.findOne({
      where: { email: email, active },
    });
  }

  async getUserByEmployeeNumber(email: string, active = 1) {
    return await this.userModel.findOne({
      where: { email: email, active },
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }

  async getAllRoles() {
    return this.roleModel.findAll();
  }

  async createUser() {
    const user: UsersModelTypes = {
      fullName: 'aaaaa',
      type: enumTypeUsers.MANAGE,
      employeeNumber: '',
      email: '',
      active: enumActiveUser.ACTIVE,
    };

    const created = await this.userModel.create(user);

    if (created) {
      const id = created.id;

      created.fullName = `${created.fullName}-${id}`;
      await created.save();
    }

    return created;
  }
}

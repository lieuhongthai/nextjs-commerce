import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from './users.model';
import { Roles } from '../roles/roles.model';

@Injectable()
export class UsersService {
  @InjectModel(Users)
  private userModel: typeof Users;

  @InjectModel(Roles)
  private roleModel: typeof Roles;

  async findAll(): Promise<Users[]> {
    return this.userModel.findAll({});
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

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }

  async getAllRoles() {
    return this.roleModel.findAll();
  }

  async createUser() {
    const user = { firstName: 'firstName', lastName: 'lastName' };

    const created = await this.userModel.create(user);

    if (created) {
      const id = created.id;

      created.fullName = `${created.fullName}-${id}`;
      await created.save();
    }

    return created;
  }
}

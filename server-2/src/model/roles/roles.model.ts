import { BelongsToMany, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Users } from '../users/users.model';
import { Permissions } from '../permissions/permissions.model';
import { RolesModelTypes, enumRoleName } from 'src/types/models/roles/type';
import { UsersModelTypes } from 'src/types/models/users/type';

@Table
export class Roles extends Model<RolesModelTypes> {
  @PrimaryKey
  @Column({ type: DataType.SMALLINT({ scale: 2 }) })
  id: number;

  @Column({ type: DataType.ENUM(...Object.values(enumRoleName)) })
  name: enumRoleName;

  @BelongsToMany(() => Users, () => Permissions, 'roleId', 'userId')
  users: Users[];

  getUsers: () => Promise<Users[]>;
  countUsers: () => Promise<number>;

  hasUser: (userId: number) => Promise<boolean>;
  hasUsers: (userIds: number[]) => Promise<boolean>;

  addUser: (userId: number) => Promise<Users>;
  addUsers: (userIds: number[]) => Promise<Users[]>;

  removeUser: (userId: number) => Promise<number>;
  removeUsers: (userId: number) => Promise<number>;

  createUser: (args: UsersModelTypes) => Promise<Users>; // ** Create a user new
}

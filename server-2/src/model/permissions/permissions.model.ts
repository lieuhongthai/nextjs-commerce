import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Users } from '../users/users.model';
import { Roles } from '../roles/roles.model';

@Table
export class Permissions extends Model {
  @ForeignKey(() => Users)
  @Column
  userId: number;

  @ForeignKey(() => Roles)
  @Column
  roleId: number;
}

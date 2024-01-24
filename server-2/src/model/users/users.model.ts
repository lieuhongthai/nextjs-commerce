import {
  AutoIncrement,
  BelongsToMany,
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Roles } from '../roles/roles.model';
import { Permissions } from '../permissions/permissions.model';
import { ActiveUserModels, TypeUserModels, UsersModelTypes } from 'src/types/models/users/type';
import { Teams } from '../teams/teams.model';
import { Leaders } from '../leaders/leaders.model';
import { Staffs } from '../staffs/staffs.model';

@Table
export class Users extends Model<UsersModelTypes> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  readonly id: number;

  @Column
  employeeNumber: string;

  @Column
  fullName: string;

  @Column
  email: string;

  @Default(1)
  @Column({ type: DataType.SMALLINT })
  type: TypeUserModels;

  @Default(1)
  @Column({ type: DataType.SMALLINT })
  active: ActiveUserModels;

  @BelongsToMany(() => Roles, () => Permissions, 'userId', 'roleId')
  roles: Roles[];
  setRoles!: (args: Roles[]) => Promise<Roles[]>;

  @BelongsToMany(() => Teams, () => Leaders, 'userId', 'teamId')
  teamLeaders: Teams;

  @BelongsToMany(() => Teams, () => Staffs, 'userId', 'teamId')
  teamStaffs: Teams;
}

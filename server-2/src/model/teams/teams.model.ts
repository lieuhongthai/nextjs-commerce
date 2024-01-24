import {
  AutoIncrement,
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Users } from '../users/users.model';
import { TeamsModelTypes } from 'src/types/models/teams/type';
import { Leaders } from '../leaders/leaders.model';
import { Staffs } from '../staffs/staffs.model';
import { UsersModelTypes } from 'src/types/models/users/type';

@Table
export class Teams extends Model<TeamsModelTypes> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.SMALLINT() })
  id: number;

  @Column({ type: DataType.STRING(100) })
  name: string;

  @BelongsToMany(() => Users, () => Leaders, 'teamId', 'userId')
  leaders: Users[];
  getLeaders: () => Promise<Users[]>;
  countLeaders: () => Promise<number>;

  hasLeader: (userId: number) => Promise<boolean>;
  hasLeaders: (userIds: number[]) => Promise<boolean>;

  addLeader: (userId: number) => Promise<Leaders>;
  addLeaders: (userIds: number[]) => Promise<Leaders[]>;

  removeLeader: (userId: number) => Promise<number>;
  removeLeaders: (userId: number) => Promise<number>;

  createLeader: (args: UsersModelTypes) => Promise<Users>; // ** Create a user new

  @BelongsToMany(() => Users, () => Staffs, 'teamId', 'userId')
  staffs: Users[];
  getStaffs: () => Promise<Users>;

  @HasMany(() => Staffs, 'teamId')
  teamsStaffs: Staffs[];
  getTeamsStaffs: () => Promise<Staffs[]>;
}

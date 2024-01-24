import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Users } from '../users/users.model';
import { Teams } from '../teams/teams.model';

@Table
export class Leaders extends Model {
  @ForeignKey(() => Users)
  @Column
  userId: number;

  @ForeignKey(() => Teams)
  @Column
  teamId: number;
}

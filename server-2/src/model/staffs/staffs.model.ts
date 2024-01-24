import { AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Teams } from '../teams/teams.model';
import { Users } from '../users/users.model';
import { StaffsModelTypes } from 'src/types/models/staffs/type';

@Table
export class Staffs extends Model<StaffsModelTypes> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.SMALLINT)
  id: number;

  @ForeignKey(() => Teams)
  teamId: number;

  @ForeignKey(() => Users)
  userId: number;

  @Column(DataType.SMALLINT)
  status: number;

  @Column(DataType.DATEONLY)
  vacationStartDate: Date;

  @Column(DataType.DATEONLY)
  vacationEndDate: Date;

  @Column(DataType.DATEONLY)
  joinStartDate: Date;

  @Column(DataType.DATEONLY)
  joinEndDate: Date;

  @Column(DataType.DATEONLY)
  transferStartDate: Date;

  @Column(DataType.DATEONLY)
  transferEndDate: Date;

  @Column(DataType.DATEONLY)
  retireStartDate: Date;

  @Column(DataType.DATEONLY)
  retireEndDate: Date;

  @Column(DataType.STRING(500))
  skill: string;

  @Column(DataType.DECIMAL(5, 2))
  standardRate: number;
}

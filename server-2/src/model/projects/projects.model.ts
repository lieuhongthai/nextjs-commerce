import { AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { ProjectsModel } from 'src/types/models/projects/type';

@Table
export class Projects extends Model<ProjectsModel> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.SMALLINT })
  id: number;

  @AllowNull(false)
  @Column({ type: DataType.STRING(10) })
  code: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING(100) })
  name: string;

  @Column({
    type: DataType.SMALLINT,
    allowNull: false,
  })
  status: number;

  @Column({
    type: DataType.SMALLINT,
    allowNull: false,
  })
  priority: number;

  @Column({
    type: DataType.SMALLINT,
    allowNull: true,
  })
  timeEstimate: number;

  @Column({
    type: DataType.SMALLINT,
    allowNull: true,
  })
  resourceEstimate: number;

  @Column({ type: DataType.DATEONLY, allowNull: true })
  estimateDateStart: Date;

  @Column({ type: DataType.DATEONLY, allowNull: true })
  estimateDateEnd: Date;

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
  })
  startTime?: Date;

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
  })
  endTime?: Date;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  remarks?: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDateString, IsNotEmpty, Max, Min } from 'class-validator';
import { ProjectPriority, ProjectStatus } from 'src/types/models/projects/type';

export class UpdateProjectRequestDTO {
  @IsNotEmpty()
  @ApiProperty()
  @Min(0)
  @Max(3)
  status: ProjectStatus;

  @Min(0)
  @Max(2)
  @IsNotEmpty()
  @ApiProperty()
  priority: ProjectPriority;

  @ApiProperty()
  timeEstimate: number;
  @ApiProperty()
  timeActual: number;

  @ApiProperty()
  @IsDateString()
  estimateDateStart?: Date;

  @ApiProperty()
  @IsDateString()
  estimateDateEnd?: Date;

  @ApiProperty()
  startTime?: Date;

  @ApiProperty()
  endTime?: Date;

  @ApiProperty()
  remarks?: string;
}

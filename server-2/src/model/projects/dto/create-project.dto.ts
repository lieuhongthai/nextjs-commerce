import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDateString, Max, Min } from 'class-validator';
import { ProjectStatus, ProjectPriority } from 'src/types/models/projects/type';

export class CreateProjectRequestDTO {
  @IsNotEmpty()
  @ApiProperty()
  code: string;

  @IsNotEmpty()
  @ApiProperty()
  name: string;

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

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsNumber, IsNumberString, IsOptional } from 'class-validator';
import { Min } from 'sequelize-typescript';
import { ProjectPriority, ProjectStatus } from 'src/types/models/projects/type';

import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export class GetProjectRequestDTO {
  @ApiPropertyOptional()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({ type: [], example: [] })
  @IsOptional()
  @IsArray()
  teams?: string[] = [];

  @ApiPropertyOptional({ type: [], example: [] })
  @IsOptional()
  @IsArray()
  priorities?: string[] = [];

  @ApiPropertyOptional()
  @IsOptional()
  offset?: number = 0;

  @ApiPropertyOptional()
  @IsOptional()
  limit?: number = 10;
}

class ProjectDTO {
  @ApiProperty()
  id: number;
  @ApiProperty()
  code: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  status: ProjectStatus;
  @ApiProperty()
  priority: ProjectPriority;

  @ApiProperty()
  timeEstimate: number;
  @ApiProperty()
  timeActual: number;

  @ApiProperty()
  resourceEstimate: number;
  @ApiProperty()
  resourceHeld: number;

  @ApiProperty()
  estimateDateStart?: Date;
  @ApiProperty()
  estimateDateEnd?: Date;

  @ApiProperty()
  startTime?: Date;
  @ApiProperty()
  endTime?: Date;

  @ApiProperty()
  createdAt?: Date;
  @ApiProperty()
  updatedAt?: Date;
}

export class GetProjectsResponseDTO {
  @ApiProperty({ type: ProjectDTO, isArray: true })
  data: ProjectDTO[];
  @ApiProperty()
  count: number;
}

export class GetProjectResponseDTO extends ProjectDTO {
  @ApiProperty()
  remarks?: string;
}

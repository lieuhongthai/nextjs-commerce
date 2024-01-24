import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsString } from 'class-validator';

export class GetUsersOracleDto {
  @ApiProperty()
  @IsNumberString()
  offset: number;

  @ApiProperty()
  @IsNumberString()
  next: number;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  departmentId: string;

  @ApiProperty()
  company: string;
}

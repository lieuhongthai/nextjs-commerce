/* eslint-disable @typescript-eslint/no-unused-vars */
import { Inject, Injectable } from '@nestjs/common';
import { CreateOracleDto } from './dto/create-oracle.dto';
import { UpdateOracleDto } from './dto/update-oracle.dto';
import { GetUsersOracleDto } from './dto/get-users-oracle.dto';
import { UsersRepository } from 'src/model/users/users.repository';
import OracleDB from 'oracledb';
import { OracleRepository } from './oracle.repository';

@Injectable()
export class OracleService {
  @Inject(UsersRepository)
  private userRepo: UsersRepository;

  @Inject(OracleRepository)
  private oracleRepo: OracleRepository;

  create(createOracleDto: CreateOracleDto) {
    return 'This action adds a new oracle';
  }

  findAll() {
    return `This action returns all oracle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} oracle`;
  }

  update(id: number, updateOracleDto: UpdateOracleDto) {
    return `This action updates a #${id} oracle`;
  }

  remove(id: number) {
    return `This action removes a #${id} oracle`;
  }

  async getUserDataOracleDb(query: GetUsersOracleDto): Promise<any> {
    const { offset, next, email, departmentId, company } = query;
    const departmentName = departmentId?.split(':')[1];
    const companyName = company?.split(':')[1];
    const employeeNumberList = {};
    const arrEmployeeNumberList: string[] = [];

    const users = await this.userRepo.findAll({
      attributes: ['employeeNumber'],
      where: { active: 1, type: 2 },
    });

    if (users) {
      users.forEach((user) => {
        employeeNumberList[`parameter${user.employeeNumber}`] = {
          dir: OracleDB.BIND_IN,
          val: user.employeeNumber,
          type: OracleDB.STRING,
        };
        arrEmployeeNumberList.push(`:parameter${user.employeeNumber}`);
      });
    }

    return await this.oracleRepo.getUserOracleDb(
      arrEmployeeNumberList,
      email,
      departmentName,
      employeeNumberList,
      offset,
      next,
      companyName,
    );
  }
}

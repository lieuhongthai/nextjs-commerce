import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OracleDB from 'oracledb';
import { countUserDB, getUserDbOracle } from 'src/configs/OracledbConfig';
OracleDB.initOracleClient();

interface UserOracle {
  id: string;
  fullName: string;
  email: string;
}
@Injectable()
export class OracleRepository {
  constructor(private configService: ConfigService) {}

  private readonly connectConfig: OracleDB.PoolAttributes = {
    user: this.configService.get('userOracle'),
    password: this.configService.get('passwordOracle'),
    connectString: this.configService.get('connectStringOracle'),
    externalAuth: false,
  };

  async getUserOracleDb(
    arrEmployeeNumberList: string[],
    email: string,
    departmentName: string,
    employeeNumberList: any,
    offset: number,
    next: number,
    companyName: string,
  ) {
    const connection = await OracleDB.getConnection(this.connectConfig);

    try {
      const results = await connection.execute(
        getUserDbOracle(arrEmployeeNumberList),
        this.paramGetDataOracle(
          email,
          departmentName === 'すべて' ? undefined : departmentName,
          employeeNumberList,
          offset,
          next,
          '従業員コード',
          'DESC',
          companyName,
        ),
      );

      const users: UserOracle[] = [];

      if (results) {
        results.rows.forEach((row) => {
          users.push({
            id: row[10]?.trim(),
            fullName: row[1]?.trim() + ' ' + (row[2] || '')?.trim(),
            email: row[0]?.trim() + '@geonet.co.jp',
          });
        });
      }

      const total = await connection.execute(
        countUserDB(arrEmployeeNumberList),
        this.countParamOracle(
          email,
          departmentName === 'すべて' ? undefined : departmentName,
          companyName,
          employeeNumberList,
        ),
      );

      return { data: users, total: total.rows[0][0] };
    } catch (err) {
      console.log(err);
    } finally {
      connection.release();
    }
  }

  private countParamOracle(
    email: any | undefined | null,
    departmentName: string | null | undefined,
    company: string | null | undefined,
    existingEmploymentNumberList: any | null | undefined,
  ) {
    return {
      email: {
        dir: OracleDB.BIND_IN,
        val: `%${email || ''}%`,
        type: OracleDB.STRING,
      },
      departmentName: {
        dir: OracleDB.BIND_IN,
        val: `%${departmentName || ''}%`,
        type: OracleDB.STRING,
      },
      company: {
        dir: OracleDB.BIND_IN,
        val: `%${company || ''}%`,
        type: OracleDB.STRING,
      },
      ...existingEmploymentNumberList,
    };
  }

  private paramGetDataOracle(
    email: string | null | undefined,
    departmentName: string | null | undefined,
    existingEmailList: any | null | undefined,
    offset: number | null | undefined,
    next: number | null | undefined,
    sortKey: any | null | undefined,
    sortOrder: any | null | undefined,
    company: string | null | undefined,
  ) {
    return {
      email: {
        dir: OracleDB.BIND_IN,
        val: `%${email || ''}%`,
        type: OracleDB.STRING,
      },
      departmentName: {
        dir: OracleDB.BIND_IN,
        val: `%${departmentName || ''}%`,
        type: OracleDB.STRING,
      },
      offsetParam: {
        dir: OracleDB.BIND_IN,
        val: offset?.toString(),
        type: OracleDB.STRING,
      },
      nextParam: {
        dir: OracleDB.BIND_IN,
        val: next?.toString() || '20',
        type: OracleDB.STRING,
      },
      sortKey: {
        dir: OracleDB.BIND_IN,
        val: `${sortKey || ''}`,
        type: OracleDB.STRING,
      },
      sortOrder: {
        dir: OracleDB.BIND_IN,
        val: `${sortOrder || 'ASC'}`,
        type: OracleDB.STRING,
      },
      company: {
        dir: OracleDB.BIND_IN,
        val: `%${company || ''}%`,
        type: OracleDB.STRING,
      },
      ...existingEmailList,
    };
  }
}

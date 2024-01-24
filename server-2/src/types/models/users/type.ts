import { Roles } from 'src/model/roles/roles.model';

export type UsersModelTypes = {
  readonly id?: number;
  employeeNumber: string;
  fullName: string;
  email: string;

  type?: 1 | 2 | enumTypeUsers;
  active?: 0 | 1 | enumActiveUser;
  roles?: Roles[];
};

export type TypeUserModels = 1 | 2;

export type ActiveUserModels = 0 | 1;

export enum enumTypeUsers {
  MANAGE = 1,
  STAFF = 2,
}

export enum enumActiveUser {
  INACTIVE = 0,
  ACTIVE = 1,
}

import { Users } from 'src/model/users/users.model';

export type RolesModelTypes = {
  id: number;
  name: enumRoleName;
  users?: Users[];
};

export type RolesNameTypes = 'システム管理者' | '企画者' | 'リーダ';

export enum enumRoleName {
  ADMINISTRATOR = 'システム管理者',
  PLANER = '企画者',
  LEADER = 'リーダ',
}

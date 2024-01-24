import { Users } from 'src/model/users/users.model';

export type TeamsModelTypes = {
  readonly id?: number;
  name: string;
  leaders?: Users;

  getLeaders?: () => Promise<Users[]>;
};

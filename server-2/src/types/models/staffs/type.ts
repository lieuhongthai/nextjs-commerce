export type StaffsModelTypes = {
  readonly id?: number;

  teamId: number;

  userId: number;

  status: number;

  vacationStartDate: Date | string;

  vacationEndDate: Date | string;

  joinStartDate: Date | string;

  joinEndDate: Date | string;

  transferStartDate: Date | string;

  transferEndDate: Date | string;

  retireStartDate: Date | string;

  retireEndDate: Date | string;

  skill: string;

  standardRate: number;
};

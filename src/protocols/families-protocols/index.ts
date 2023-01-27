export type userFamiliesType = {
  familyOwner: number;
  request: boolean;
  Family: {
    familyName: string;
  };
};

export type FamilyCreationType = {
  familyName: string;
};

export type FamilyRequestsType = {
  User: {
    name: string;
  };
  createdAt: Date;
};

export type AnswerRequestType = {
  answer: string;
};

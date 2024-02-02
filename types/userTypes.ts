export type ContactInfo = {
  contact: string;
  contactType: string;
  verified: boolean;
};

export type User = {
  firstName: string;
  lastName: string;
  fullName: string;
  contactInfo: [ContactInfo];
  credential: string;
  password: string;
  birthday: Date;
  gender: string;
  pronoun: string;
  confirm: boolean
  // redirectUrl: string;
};

export type AuthUser = {
  id: string;
  confirm: boolean;
  username?: string;
  contactInfo: ContactInfo;
};

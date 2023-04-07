export interface UserCreate {
  name: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
  phone: number | null;
  //seller: boolean | null;
};
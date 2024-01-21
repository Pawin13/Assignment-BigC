export interface IUserProfile {
  id: number;
  name?: string;
  username?: string;
  email?: string;
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: Object[];
  };
  phone?: string;
  website?: string;
  company?: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
}
export interface IProduct {
  id: number;
  name: string;
  desc: string;
  price: number;
  unit: string;
  thumb: string;
}

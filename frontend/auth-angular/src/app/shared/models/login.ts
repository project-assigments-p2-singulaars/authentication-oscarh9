export interface Login {
  email: string;
  password: string;
}

export interface LoginResponse{
  accessToken: string;
  user: {
    id: number;
    email: string;
    firstName?: string;
    lastName?: string;
  }
}
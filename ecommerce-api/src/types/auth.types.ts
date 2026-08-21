export interface JwtPayload {
  sub: string;
  username: string;
  email: string;
  iat?: number;
  exp?: number;
}

export interface LoginResponse {
  token: string;
  tokenType: "Bearer";
  expiresIn: string;
  user: {
    id: number;
    username: string;
    age: number;
    gender: string;
    email: string;
    createdAt: string;
  };
}
export interface User {
  id: string;
  name: string;
  email: string;
  // Add any other user properties here
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

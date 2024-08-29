export interface User {
  _id: string;
  name: string;
  email: string;
  status?: string;
  profilePicture?: string;
  // Add any other user properties here
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

interface LoginData {
  email: string;
  password: string;
}
interface SignUpData {
  email: string;
  password: string;
  name: String;
  confirmPassword: string;
}
export { LoginData, SignUpData };

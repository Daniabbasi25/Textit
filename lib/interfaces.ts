interface LoginData {
  email: string;
  password: string;
}

interface FlashBarProps {
  type: "success" | "danger" | "info";
  message: string;
}
interface SignUpData {
  email: string;
  password: string;
  name: String;
  confirmPassword: string;
}
interface SvgProps {
  width: number;
  height: number;
  color?: string;
}
export { LoginData, SignUpData, SvgProps, FlashBarProps };

import * as yup from "yup";
const VALID_EMAIL = "Please enter a valid email address";
const VALID_PASSWORD = "Password must be at least 8 characters long";
const REQUIRED_EMAIL = "Email is required";
const REQUIRED_PASSWORD = "Password is required";
const REQUIRED = "This Field is Required";
const MATCH_PASSWORD = "Passwords must match";
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const loginSchema = yup.object({
  email: yup
    .string()
    .email(VALID_EMAIL)
    .required(REQUIRED_EMAIL)
    .matches(EmailRegex, VALID_EMAIL),
  password: yup.string().required(REQUIRED_PASSWORD).min(8, VALID_PASSWORD),
});
const signupSchema = yup.object({
  email: yup.string().email(VALID_EMAIL).required(REQUIRED_EMAIL),
  name: yup.string().required(REQUIRED),
  password: yup.string().required(REQUIRED_PASSWORD).min(8, VALID_PASSWORD),
  confirmPassword: yup
    .string()
    .required(REQUIRED_PASSWORD)
    .min(8, VALID_PASSWORD)
    .oneOf([yup.ref("password")], MATCH_PASSWORD),
});
export { loginSchema, signupSchema };

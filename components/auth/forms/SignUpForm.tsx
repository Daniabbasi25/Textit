import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthInput from "../ui/AuthInput";
import AuthButton from "../ui/AuthButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "@/lib/validations";
import { getHeight } from "@/lib";
import { SignUpData } from "@/lib/interfaces";

const defaultValues = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
};
const SignUpForm = () => {
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
    defaultValues,
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data: SignUpData): void => {};

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <AuthInput label="Your name" control={control} name="name" />
        <AuthInput label="Your email" control={control} name="email" />
        <AuthInput
          label="Password"
          control={control}
          name="password"
          isPassword
        />
      </View>
      <AuthButton
        text="Create an account"
        type="gradient"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    paddingBottom: getHeight(2),
  },
  inputContainer: {
    gap: getHeight(4),
    flex: 1,
    justifyContent: "center",
  },
});

import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC, Fragment, memo, useState } from "react";
import { fontFamilies, getFontSize, getHeight } from "@/lib";
import { Colors } from "@/theme";
import Feather from "@expo/vector-icons/Feather";
import { useController } from "react-hook-form";

interface InputProps extends TextInputProps {
  isPassword?: boolean;
  label: string;
  control?: any;
  name: string;
}
const AuthInput: FC<InputProps> = ({
  isPassword,
  label,
  control,
  name,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(isPassword);

  const {
    field: { onChange, onBlur, value },
    formState: { errors },
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  } = control && useController({ name, control });

  const errorMessage = (message: string): string => {
    return message.charAt(0).toUpperCase() + message.slice(1);
  };

  const ISERROR = Boolean(errors?.[name]);
  const BORDERCOLOR = ISERROR ? Colors.errorColor : Colors.inputBorder;
  const LABELCOLOR = ISERROR ? Colors.errorColor : Colors.AuthHeading;
  return (
    <View style={styles.mainContainer}>
      <Text
        style={[
          styles.label,
          {
            color: LABELCOLOR,
          },
        ]}
      >
        {label}
      </Text>
      <View style={[styles.inputContainer, { borderBlockColor: BORDERCOLOR }]}>
        <TextInput
          onBlur={() => {
            onBlur();
          }}
          onChangeText={(e) => onChange(e)}
          value={value}
          {...rest}
          secureTextEntry={showPassword}
          style={styles.textInput}
        />
        {isPassword && (
          <TouchableOpacity
            onPress={() => {
              setShowPassword(!showPassword);
            }}
          >
            <Feather
              name={showPassword ? "eye" : "eye-off"}
              size={getFontSize(16)}
              color={LABELCOLOR}
            />
          </TouchableOpacity>
        )}
      </View>

      {ISERROR && (
        <View>
          <Text style={styles.errorText}>
            {errors?.[name]?.message
              ? errorMessage(errors?.[name]?.message)
              : ""}
          </Text>
        </View>
      )}
    </View>
  );
};

export default memo(AuthInput);

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    marginTop: getHeight(2),
  },
  inputContainer: {
    width: "85%",
    paddingVertical: getHeight(0.5),
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  label: {
    textAlign: "left",
    width: "85%",
    color: Colors.AuthHeading,
    fontFamily: fontFamilies.Popins.normal,
    fontWeight: "500",
    fontSize: getFontSize(14),
  },
  textInput: {
    fontSize: getFontSize(16),
    fontFamily: fontFamilies.Popins.normal,
    color: Colors.black,
    flex: 1,
    paddingHorizontal: 10,
  },
  errorText: {
    color: Colors.errorColor,
    fontSize: getFontSize(12),
    textAlign: "right",
    fontFamily: fontFamilies.Popins.light,
    paddingTop: 5,
  },
});

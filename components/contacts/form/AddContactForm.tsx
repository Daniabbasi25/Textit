import { View } from "react-native";
import React, { FC } from "react";
import { useFlashMessage } from "@/context/FlashMessageContext";
import { useLoader } from "@/context/LoaderContext";
import { useForm } from "react-hook-form";
import { addContactSchema } from "@/lib/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddContactFormData } from "@/lib/interfaces";
import AuthInput from "@/components/auth/ui/AuthInput";
import AuthButton from "@/components/auth/ui/AuthButton";
import { getHeight, getWidth } from "@/lib";

interface Props {
  handleClose: () => void;
}
const defaultValues = {
  email: "",
};
const AddContactForm: FC<Props> = ({ handleClose }) => {
  const { showMessage } = useFlashMessage();
  const { hideLoader, showLoader } = useLoader();
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
    defaultValues,
    resolver: yupResolver(addContactSchema),
  });
  const onSubmit = (data: AddContactFormData): void => {
    console.log(data);

    handleClose();
    setTimeout(() => {
      showLoader();
    }, 500);
  };
  return (
    <View>
      <AuthInput label="Your email" control={control} name="email" />
      <View
        style={{
          width: getWidth(50),
          marginTop: getHeight(5),
          alignSelf: "center",
        }}
      >
        <AuthButton
          text="Add"
          type="gradient"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

export default AddContactForm;

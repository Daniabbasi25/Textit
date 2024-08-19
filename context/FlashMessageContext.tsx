import FlashBar from "@/components/FlashBar";
import React, {
  type ReactNode,
  createContext,
  useContext,
  useState,
  type FC,
} from "react";

interface FlashMessageContextType {
  showMessage: (type: "success" | "danger" | "info", message: string) => void;
}

interface FlashMessageProviderProps {
  children: ReactNode;
}

const FlashMessageContext = createContext<FlashMessageContextType | undefined>(
  undefined
);

export const useFlashMessage = (): FlashMessageContextType => {
  const context = useContext(FlashMessageContext);
  if (context == null || context === undefined) {
    throw new Error(
      "useFlashMessage must be used within a FlashMessageProvider"
    );
  }

  return context;
};
export const FlashMessageProvider: FC<FlashMessageProviderProps> = ({
  children,
}) => {
  const [flashMessage, setFlashMessage] = useState<any>({ isVisible: false });

  const showMessage = (
    type: "success" | "danger" | "info",
    message: string
  ): void => {
    setFlashMessage({ isVisible: true, type, message });
    setTimeout(() => {
      hideMessage();
    }, 3000);
  };

  const hideMessage = (): void => {
    setFlashMessage({ isVisible: false });
  };

  return (
    <FlashMessageContext.Provider value={{ showMessage }}>
      {children}
      <FlashBar
        type={flashMessage.type}
        message={flashMessage.message}
        isVisible={flashMessage.isVisible}
        onHide={hideMessage}
      />
    </FlashMessageContext.Provider>
  );
};

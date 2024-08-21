import React, {
  createContext,
  useContext,
  useState,
  FC,
  ReactNode,
} from "react";
import Loader from "@/components/Loader"; // Import your loader component

interface LoaderContextType {
  showLoader: () => void;
  hideLoader: () => void;
}

interface LoaderProviderProps {
  children: ReactNode;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export const useLoader = (): LoaderContextType => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }
  return context;
};

export const LoaderProvider: FC<LoaderProviderProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showLoader = () => {
    setIsVisible(true);
  };

  const hideLoader = () => {
    setIsVisible(false);
  };

  return (
    <LoaderContext.Provider value={{ showLoader, hideLoader }}>
      {children}
      <Loader isVisible={isVisible} />
    </LoaderContext.Provider>
  );
};

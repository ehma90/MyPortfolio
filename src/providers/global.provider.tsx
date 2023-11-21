import { FC, PropsWithChildren, useContext, useMemo, useState } from "react";
import { GlobalContext, GlobalContextType } from "@/contexts/global.context";

export const GlobalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [showContact, setShowContact] = useState<boolean>(false);

  const contextValue: GlobalContextType = useMemo(
    () => ({
      showContact,
      setShowContact,
    }),
    [showContact, setShowContact]
  );

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  const ctx = useContext(GlobalContext);
  if (!ctx) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return ctx;
};

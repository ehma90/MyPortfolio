import { createContext } from "react";

export type GlobalContextType = {
    showContact: boolean;
    setShowContact: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

GlobalContext.displayName = "GlobalContext";


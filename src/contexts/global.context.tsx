import { DataProps } from "@/data/porfolioDatas";
import { createContext } from "react";

export type GlobalContextType = {
    isDisplaying: boolean;
    handleProjectsDisplay: (slug:string) => void;
    showSlug: DataProps;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

GlobalContext.displayName = "GlobalContext";


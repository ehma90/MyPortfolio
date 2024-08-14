import { FC, PropsWithChildren, useContext, useMemo, useState } from "react";
import { GlobalContext, GlobalContextType } from "@/contexts/global.context";
import myDatas, { DataProps } from "@/data/porfolioDatas";

export const GlobalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isDisplaying, setIsDisplaying] = useState<boolean>(false);
  const [showSlug, isShowSlug] = useState<DataProps>({
    id: 0,
    image: "",
    slug: "",
    header: "",
    text: "",
    link: "",
    deploy: "",
    stack: [],
  });

  const handleProjectsDisplay = (slug: string) => {
    const getClicked = myDatas.find((data) => data.slug === slug);

    if (!getClicked) {
      return <div>Project not found</div>;
    }

    setIsDisplaying(!isDisplaying);
    isShowSlug(getClicked);
  };

  const handleGoBack = () => {
    setIsDisplaying(!isDisplaying);
  };

  const contextValue: GlobalContextType = useMemo(
    () => ({
      isDisplaying,
      showSlug,
      handleProjectsDisplay,
      handleGoBack,
    }),
    [showSlug, isDisplaying, handleProjectsDisplay, handleGoBack]
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

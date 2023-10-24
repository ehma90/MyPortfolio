import { Text } from "@/reusable-components";
import { type } from "os";
import React, { FC } from "react";

type TitleProps = {
  width?: string;
};

const Title: FC<TitleProps> = ({ width }) => {
  return (
    <div>
      <Text
        as="h1"
        variant="h1"
        className="text-2xl md:text-6xl my-2 font-extralight font-sans"
      >
        <span className="font-bold text-blue">Emmanuel</span> Essien
      </Text>
      <p className="font-medium md:text-2xl">Software Engineer</p>
      <div
        className={`shadow-lg shadow-green-900/50 mx-auto absolute ${
          width ? width : `w-[85px] md:w-[121px]`
        } border border-green-900`}
      ></div>
    </div>
  );
};

export default Title;

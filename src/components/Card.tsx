import { useGlobalContext } from "@/providers/global.provider";
import { Button, Image } from "@/reusable-components";
import Spinner from "@/reusable-components/spinner";
import React, { FC, useEffect, useState } from "react";

interface CardProps {
  image: string;
  title?: string;
  slug: string;
}

const Card: FC<CardProps> = ({ image, title, slug }) => {
  const { handleProjectsDisplay } = useGlobalContext();

  return (
    <div className="border w-full max-w-xl rounded-2xl p-4 md:p-5  space-y-6 transition border-white/50 hover:border-white/50">
      <Image
        src={image || "/assets/university-website.png"}
        width={200}
        height={150}
        alt={title || "hello"}
        className="w-full pointer-events-none rounded-lg shadow-md"
        priority
      />
      <Button
        onClick={() => handleProjectsDisplay(slug)}
        size="md"
        variant="outlined"
        className="w-full font-bold"
      >
        See project
      </Button>
    </div>
  );
};

export default Card;

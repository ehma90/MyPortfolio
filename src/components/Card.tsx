import { Button, Image } from "@/tw-components";
import Spinner from "@/tw-components/spinner";
import React, { FC, useState } from "react";

interface CardProps {
  image: any;
  title: string;
  slug: string;
}

const Card: FC<CardProps> = ({ image, title, slug }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="border rounded-2xl p-4 md:p-6 w-full max-w-sm space-y-4 ">
      {isLoading ? (
        <div className="bg-gray-200 rounded-xl max-w-52 h-52"></div>
      ) : (
        <Image src={image || "/assets/university-website.png"} width={200} height={150} alt={title} className="w-full pointer-events-none rounded-lg"/>
      )}
      <Button
        href={`projects/${slug}`}
        size="md"
        variant="primary"
        className="w-full"
      >
        See project
      </Button>
    </div>
  );
};

export default Card;

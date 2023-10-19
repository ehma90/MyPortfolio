import { Button, Image } from "@/tw-components";
import React, { FC } from "react";

interface CardProps {
  image: string;
  title: string;
  slug: string;
}

const Card: FC<CardProps> = ({ image, title, slug }) => {
  return (
    <div className="border rounded-2xl p-4 md:p-6 w-full max-w-sm ">
      <Image src={image} width={200} height={150} alt={title} />
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

import { useGlobalContext } from "@/providers/global.provider";
import { Button, Image } from "@/reusable-components";
import Spinner from "@/reusable-components/spinner";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

interface CardProps {
  image: string;
  title?: string;
  slug: string;
}

const Card: FC<CardProps> = ({ image, title, slug }) => {
  const router = useRouter()

  return (
    <div className="border w-full max-w-xl rounded-md p-3  space-y-4 transition border-white/50 hover:border-white/50">
      <Image
        src={image || "/assets/university-website.png"}
        width={200}
        height={150}
        alt={title || "hello"}
        className="w-full pointer-events-none rounded-md shadow-md"
        priority
      />
      <Button
        onClick={() => router.push(`/projects/${slug}`)}
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

import { Button, Image } from "@/reusable-components";
import Spinner from "@/reusable-components/spinner";
import React, { FC, useState } from "react";
import { motion } from "framer-motion";

interface CardProps {
  image: string;
  title: string;
  slug: string;
}

const Card: FC<CardProps> = ({ image, title, slug }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <motion.div transition={{type: "spring"}} animate={{x: 0}} initial={{x:300}} className="border rounded-2xl p-4 md:p-5 max-w-52 space-y-6 shadow-sm transition hover:border-green-400">
      {isLoading ? (
        <div className="bg-gray-200 rounded-xl w-full h-52"></div>
      ) : (
        <Image
          src={image || "/assets/university-website.png"}
          width={200}
          height={150}
          alt={title}
          className="w-full pointer-events-none rounded-lg shadow-md"
          priority
        />
      )}
      <Button
        href={`projects/${slug}`}
        size="md"
        variant="outlined"
        className="w-full"
      >
        See project
      </Button>
    </motion.div>
  );
};

export default Card;

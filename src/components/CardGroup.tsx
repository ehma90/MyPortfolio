import { DataProps } from "@/data/porfolioDatas";
import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";


const CardGroup: React.FC<{ data: DataProps[] }> = ({ data }) => {
  return (
    <div>
      <motion.div
        animate={{ y: 0 }}
        initial={{ y: 100 }}
        transition={{ duration: 0.9, type: "spring" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {data
          .map((item) => (
            <Card
              key={item?.id}
              image={item?.image}
              title={item.header}
              slug={item?.slug}
            />
          ))
          .reverse()}
      </motion.div>
    </div>
  );
};

export default CardGroup;

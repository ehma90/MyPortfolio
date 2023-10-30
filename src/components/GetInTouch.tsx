import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/reusable-components";
import Label from "@/reusable-components/label";
import Input from "@/reusable-components/input";
import { useGlobalContext } from "@/providers/global.provider";
import Spinner from "@/reusable-components/spinner";

const GetInTouch = () => {
  const { setShowContact } = useGlobalContext();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = useCallback((e: any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
        setShowContact(false);
        setLoading(false);
    }, 2000);

  }, []);
  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: -200 }}
      transition={{ type: "spring", stiffness: 70, duration: 1 }}
      className=" w-full md:w-4/5"
    >
      <div className=" px-3 text-md md:text-lg">
        <form onSubmit={handleSubmit}>
          <Label id="full_name">Full name</Label>
          <Input
            type="text"
            id="full_name"
            inputSize="md"
            placeholder="Enter your full name"
            className="w-full mt-2"
          />
          <Button variant="primary" size="md" type="submit">
            {!loading ? "Submit" : <Spinner color="white" />}
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default GetInTouch;

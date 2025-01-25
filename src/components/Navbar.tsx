import { Link } from "@/reusable-components";
import React from "react";

const Navbar = () => {
  return (
    <div className="pt-6 flex justify-end gap-5 w-full">
      <p className="underline font-bold cursor-pointer">Cover letter</p>
      <Link
        href="https://docs.google.com/document/d/1UXGbY2Hk6mysnjHTrqilk62v1nRaYy4n/edit?usp=sharing&ouid=103092481475437846039&rtpof=true&sd=true"
        external
      >
        <p className="underline font-bold cursor-pointer">Resume</p>
      </Link>
    </div>
  );
};

export default Navbar;

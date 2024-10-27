import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="font-semibold text-2xl">
      Taskly
    </Link>
  );
};

export default Logo;

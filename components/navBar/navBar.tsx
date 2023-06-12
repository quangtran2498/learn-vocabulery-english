import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="nav flex justify-between">
      <div className="">english daily</div>
      <div className="nav-contianer-item flex justify-between w-[50%]">
        <div className="nav-item">
          <Link href={"/"}>home</Link>
        </div>
        <div className="nav-item">
          <Link href={"/vocabulary-number"}>tu vung tuy chinh</Link>
        </div>
        <div className="nav-item">
          <Link href={"/vocabulery-topic"}>tu vung theo chu de</Link>
        </div>
        <div className="nav-item">
          <Link href={"/vocabulery-game"}>tu vung tro troi</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

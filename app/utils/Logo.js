import React from "react";
import Image from 'next/image'
import logo from '/public/Images/logo.png'
const Logo = () => {
  return <Image src={logo} alt='logo' priority />
};

export default Logo;

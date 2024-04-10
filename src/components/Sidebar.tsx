import Image from "next/image";
import React from "react";
import { SidebarMenuItem } from "./SidebarMenuItem";

export const Sidebar = () => {
  return (
    <div>
      {/* Logo */}
      <Image src="/images/logo.png" width="50" height="50" alt="logo"></Image>

      {/* Menu */}
      <SidebarMenuItem />

      {/* Button */}

      {/* Mini-Profile */}
    </div>
  );
};

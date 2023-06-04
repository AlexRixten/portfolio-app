import React from "react";
import { sideBarList } from "@/shared/mockData/sideBarList";
import { SidebarItem } from "@/shared/ui/sidebarItem/SidebarItem";
import { ThemeBtn } from "@/features/themeBtn/ThemeBtn";
import "./sideBar.scss";

export const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBar-wrapper">
        <ThemeBtn />
        <ul className="sideBar-list ">
          {Object.values(sideBarList).map((value) => (
            <SidebarItem key={value.title} {...value} />
          ))}
        </ul>
      </div>
    </div>
  );
};

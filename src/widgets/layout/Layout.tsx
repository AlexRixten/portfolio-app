import React from "react";
import { Info, SideBar } from "@/shared";
import "./layout.scss";
import { ThemeProvider } from "next-theme";

interface IProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: IProps) => {
  return (
    <ThemeProvider attribute="class">
      <div className="main_layout">
        <Info />
        {children}
        <SideBar />
      </div>
    </ThemeProvider>
  );
};

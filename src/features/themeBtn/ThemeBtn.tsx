import React from "react";
import useTheme from "next-theme";
import { Icon } from "@/shared/ui/icon/Icon";
import { EIcon } from "@/shared/enums/icon.enum";
import "./themeBtn.scss";

export const ThemeBtn = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    switch (theme) {
      case "light": {
        setTheme("dark");
        break;
      }
      default: {
        setTheme("light");
        break;
      }
    }
  };
  return (
    <button className="theme-btn" onClick={changeTheme}>
      <Icon size={40} name={EIcon.Theme} />
    </button>
  );
};

"use client";

import React from "react";
import { ThemeProvider } from "@mui/styles";
import { theme } from "@/theme";
import GlobalPopupConfirm, {
  GlobalPopupConfirmRef,
} from "../common/popup/GlobalPopupConfirm";
import PopupService from "../common/popup/PopupService";

const PageMain = ({ children }: { children: React.ReactNode }) => {
  PopupService.instance = React.useRef<GlobalPopupConfirmRef | any>(null);

  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalPopupConfirm ref={PopupService.instance} />
    </ThemeProvider>
  );
};

export default PageMain;

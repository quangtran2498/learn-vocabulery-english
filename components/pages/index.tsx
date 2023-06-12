"use client";

import React from "react";
import { ThemeProvider } from "@mui/styles";
import { theme } from "@/theme";


const PageMain = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default PageMain;

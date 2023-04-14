import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
      primary: {
          main: '#b01b1f',
      },
      secondary: {
          main: '#757e85'
      }
  }
})

export default function Palette({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

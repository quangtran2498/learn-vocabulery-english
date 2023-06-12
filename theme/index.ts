import { createTheme } from "@mui/material";
import { Theme } from "@mui/material/styles";
// import type {} from "@mui/lab/themeAugmentation";
// import "@mui/lab/themeAugmentation";

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}
declare module "@mui/material/styles" {
  interface CustomTheme {
    custom?: {
      text: {
        highLight: string;
        information: string;
        opacity: string;
        titleSteps: string;
        link: string;
        title: string;
        pinkSubTitle: string;
        desc: string;
        blueMain: string;
        white: string;
      };
      background: {
        backgroundCard: string;
        white: string;
        blueMain: string;
        pink: string;
      };
      flexBox: {
        flexBetweenCenter: {
          display: string;
          justifyContent: string;
          alignItems: string;
        };
        flexCenterCenter: {
          display: string;
          justifyContent: string;
          alignItems: string;
        };
        flexBetWeen: {
          display: string;
          justifyContent: string;
        };
        flexAlignItemsCenter: {
          display: string;
          alignItems: string;
        };
        flexJusCenter: {
          display: string;
          justifyContent: string;
        };
        flexColCenter: {
          display: string;
          alignItems: string;
          flexDirection: string;
        };
      };
      border: {
        bottomTitle: string;
        borderBottom: string;
        main: string;
      };
      textTitleBorder: {
        paddingBottom: string;
        marginBottom: string;
        borderBottom: string;
      };
      textDesc: {
        marginBottom: string;
      };
      textTitleSection: {
        paddingBottom: string;
        marginBottom: string;
        borderBottom: string;
      };
      boxShadow: {
        main: string;
      };
      commonText: {
        titleIntro: {
          fontSize: string;
          fontWeight: number;
          lineHeight: string;
          marginTop: string;
          color: string;
          textAlign?: any;
        };
      };
    };
  }
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 376,
      sm: 568,
      md: 767,
      lg: 992,
      xl: 1024,
    },
  },
  custom: {
    text: {
      highLight: "rgba(216, 1, 102, 1)",
      information: "rgba(0, 0, 0, 1)",
      opacity: "rgba(112, 112, 112, 1)",
      titleSteps: "rgba(221, 0, 113, 1)",
      link: "rgba(81, 190, 240, 1)",
      title: "#000000",
      pinkSubTitle: "rgba(221, 0, 113, 1)",
      desc: "#666666",
      blueMain: "rgba(20, 30, 210, 1)",
      white: "#fff",
    },
    background: {
      backgroundCard: "rgba(252, 236, 243, 1)",
      white: "#fff",
      blueMain: "rgba(20, 30, 210, 1)",
      pink: "#EA84AB",
    },
    border: {
      bottomTitle: "#f0f0f0",
      borderBottom: "1px solid #f0f0f0",
      main: "#F5F5F5",
    },
    flexBox: {
      flexBetweenCenter: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
      flexCenterCenter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      flexBetWeen: {
        display: "flex",
        justifyContent: "space-between",
      },
      flexAlignItemsCenter: {
        display: "flex",
        alignItems: "center",
      },
      flexJusCenter: {
        display: "flex",
        justifyContent: "center",
      },
      flexColCenter: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      },
    },
    textTitleBorder: {
      paddingBottom: "16px",
      marginBottom: "16px",
      borderBottom: "1px solid rgba(217, 217, 217, 1)",
    },
    textDesc: {
      marginBottom: "4px",
    },
    textTitleSection: {
      paddingBottom: "12px",
      marginBottom: "24px",
      borderBottom: "1px solid #f0f0f0",
    },
    boxShadow: {
      main: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    },
    commonText: {
      titleIntro: {
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "19.36px",
        marginTop: "59px",
        color: "#141ED2",
        textAlign: "center",
      },
    },
  },
  palette: {
    action: {
      active: "#6B7280",
      focus: "rgba(55, 65, 81, 0.12)",
      hover: "rgba(55, 65, 81, 0.04)",
      selected: "rgba(55, 65, 81, 0.08)",
      disabledBackground: "rgba(55, 65, 81, 0.12)",
      disabled: "rgba(55, 65, 81, 0.26)",
    },
    background: {
      default: "#F9FAFC",
      paper: "#FFFFFF",
    },
    divider: "#E6E8F0",
    primary: {
      main: "#104AC6",
      light: "#828DF8",
      dark: "#3832A0",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#10B981",
      light: "#3FC79A",
      dark: "#0B815A",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#14B8A6",
      light: "#43C6B7",
      dark: "#0E8074",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#2196F3",
      light: "#64B6F7",
      dark: "#0B79D0",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#FFB020",
      light: "#FFBF4C",
      dark: "#B27B16",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#ff0000",
      light: "#DA6868",
      dark: "#922E2E",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#000000",
      secondary: "#65748B",
      disabled: "rgba(55, 65, 81, 0.48)",
    },
  },
  components: {},
});

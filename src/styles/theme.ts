import { Dimensions } from "react-native"

const { width: screenWidth, height: screenHeight } = Dimensions.get("window")

export const theme = {
  colors: {
    primary: "#6366f1",
    primaryLight: "#818cf8",
    primaryDark: "#4f46e5",
    secondary: "#f8fafc",
    accent: "#e2e8f0",
    background: "#ffffff",
    surface: "rgba(255, 255, 255, 0.9)",
    text: {
      primary: "#1e293b",
      secondary: "#64748b",
      muted: "#94a3b8",
      inverse: "#ffffff",
    },
    border: "rgba(255, 255, 255, 0.3)",
    shadow: "rgba(0, 0, 0, 0.1)",
    success: "#10b981",
    error: "#ef4444",
    warning: "#f59e0b",
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: "700" as const,
      lineHeight: 40,
    },
    h2: {
      fontSize: 28,
      fontWeight: "700" as const,
      lineHeight: 36,
    },
    h3: {
      fontSize: 20,
      fontWeight: "700" as const,
      lineHeight: 28,
    },
    body: {
      fontSize: 16,
      fontWeight: "400" as const,
      lineHeight: 24,
    },
    bodySmall: {
      fontSize: 14,
      fontWeight: "400" as const,
      lineHeight: 20,
    },
    caption: {
      fontSize: 12,
      fontWeight: "400" as const,
      lineHeight: 16,
    },
    button: {
      fontSize: 16,
      fontWeight: "600" as const,
    },
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  },
  shadows: {
    small: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    medium: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.1,
      shadowRadius: 12,
      elevation: 5,
    },
    large: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.2,
      shadowRadius: 24,
      elevation: 10,
    },
  },
  layout: {
    screenWidth,
    screenHeight,
    isSmallScreen: screenWidth < 375,
    isMediumScreen: screenWidth >= 375 && screenWidth < 414,
    isLargeScreen: screenWidth >= 414,
    containerPadding: screenWidth < 375 ? 16 : 20,
    maxContentWidth: Math.min(screenWidth - 40, 400),
  },
}

export type Theme = typeof theme

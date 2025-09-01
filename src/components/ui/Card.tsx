import type React from "react"
import { View, type ViewStyle, StyleSheet } from "react-native"
import { BlurView } from "expo-blur"
import { theme } from "../../styles/theme"

interface CardProps {
  children: React.ReactNode
  style?: ViewStyle
  blur?: boolean
  intensity?: number
}

export function Card({ children, style, blur = true, intensity = 20 }: CardProps) {
  if (blur) {
    return (
      <BlurView intensity={intensity} style={[styles.card, style]}>
        {children}
      </BlurView>
    )
  }

  return <View style={[styles.card, styles.solidCard, style]}>{children}</View>
}

const styles = StyleSheet.create({
  card: {
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    ...theme.shadows.medium,
  },
  solidCard: {
    backgroundColor: theme.colors.surface,
  },
})

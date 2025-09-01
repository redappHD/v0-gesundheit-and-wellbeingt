import { ScrollView, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Header } from "../components/Header"
import { HeroSection } from "../components/HeroSection"
import { FeaturesSection } from "../components/FeaturesSection"
import { TestimonialsSection } from "../components/TestimonialsSection"
import { PricingSection } from "../components/PricingSection"
import { CTASection } from "../components/CTASection"
import { Footer } from "../components/Footer"

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollView: {
    flex: 1,
  },
})

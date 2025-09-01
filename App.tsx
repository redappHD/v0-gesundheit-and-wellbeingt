import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { AuthProvider } from "./src/contexts/AuthContext"

// Import screens
import HomeScreen from "./src/screens/HomeScreen"
import FeaturesScreen from "./src/screens/FeaturesScreen"
import PricingScreen from "./src/screens/PricingScreen"
import ResourcesScreen from "./src/screens/ResourcesScreen"
import ContactScreen from "./src/screens/ContactScreen"
import LoginScreen from "./src/screens/LoginScreen"
import RegisterScreen from "./src/screens/RegisterScreen"

const Stack = createStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NavigationContainer>
          <StatusBar style="dark" backgroundColor="#ffffff" />
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: "#ffffff",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 5,
              },
              headerTintColor: "#1e293b",
              headerTitleStyle: {
                fontWeight: "600",
                fontSize: 18,
              },
              headerBackTitleVisible: false,
              cardStyle: { backgroundColor: "#ffffff" },
            }}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "VitalWork",
                headerShown: false,
              }}
            />
            <Stack.Screen name="Features" component={FeaturesScreen} options={{ title: "Features" }} />
            <Stack.Screen name="Pricing" component={PricingScreen} options={{ title: "Preise" }} />
            <Stack.Screen name="Resources" component={ResourcesScreen} options={{ title: "Ressourcen" }} />
            <Stack.Screen name="Contact" component={ContactScreen} options={{ title: "Kontakt" }} />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                title: "Anmelden",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{
                title: "Registrieren",
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  )
}

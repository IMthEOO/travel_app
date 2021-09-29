import React from "react";
import { StyleSheet, KeyboardAvoidingView, SafeAreaView } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import Details from "./screens/Details";
import Saved from "./screens/Saved";
import Profile from "./screens/Profile";
import Settings from "./screens/Settings";
import Languages from "./screens/Languages";
import Categories from "./screens/Categories";
import Category from "./screens/Category";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import colors from "./assets/colors/colors";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "#b0b0b0",
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="home" type="material-icons" color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="heart" type="font-awesome" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon
              name="settings"
              type="material-icons"
              color={color}
              size={32}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          {/* <HomeScreen /> */}
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen
              name="TabNavigator"
              component={TabNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Languages" component={Languages} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="Categories" component={Categories} />
          </Stack.Navigator>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: "#fff",
    // padding: 10,
    borderTopWidth: 0,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 10,
  },
});

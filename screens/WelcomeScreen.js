import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import colors from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={{ flex: 1 }}
      //We are using online image to set background
      source={{
        uri: "https://images.pexels.com/photos/4321802/pexels-photo-4321802.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      }}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.heading}>
            Explore and {"\n"}discover new places
          </Text>
          <Text style={styles.paragraph}>
            Browse a lot of interesting tourist offers and choose something for
            yourself. The world is waiting!
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <View style={styles.btnPrimary}>
              <Text style={styles.btnPrimaryText}>Sign in</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <View style={styles.btnSecondary}>
              <Text style={styles.btnSecondaryText}>Create an account</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.overlay,
    justifyContent: "flex-end",
  },
  wrapper: {
    padding: 25,
  },
  heading: {
    fontSize: 32,
    color: colors.white,
    fontWeight: "600",
  },
  paragraph: {
    fontSize: 16,
    color: colors.white,
    marginTop: 10,
  },
  btnPrimary: {
    marginTop: 16,
    backgroundColor: colors.primary,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  btnPrimaryText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "500",
  },
  btnSecondary: {
    marginTop: 16,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  btnSecondaryText: {
    color: colors.white,
    textDecorationLine: "underline",
    fontSize: 16,
    fontWeight: "400",
  },
});

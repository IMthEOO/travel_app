import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  CheckBox,
  Linking,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";
import colors from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.navContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
            <View style={styles.arrow}>
              <Icon name="arrow-left" type="feather" color={colors.primary} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Create {"\n"}Account</Text>
        </View>
        <View style={styles.formWrapper}>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Your Email</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder=""
                keyboardType="email-address"
              />
            </View>
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholder=""
                keyboardType="default"
                autoCapitalize={"none"}
              />
              <Icon
                style={styles.inputIcon}
                name="eye"
                type="feather"
                color="#27A294"
              />
            </View>
          </View>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxLabel}>
            I agree to the{" "}
            <Text
              style={styles.link}
              onPress={() => Linking.openURL("http://google.com")}
            >
              Terms {"&"} Conditions
            </Text>
            {"\n"}
            and <Text style={styles.link}>Privacy Policy</Text>
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("TabNavigator")}>
            <View style={styles.btnPrimary}>
              <Text style={styles.btnPrimaryText}>Create account</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.loginText}>
            Already have an account?{" "}
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.link}>Log in</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  navContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
  },
  arrow: {
    backgroundColor: colors.lightprimary,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
  },
  heading: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  headingText: {
    fontSize: 32,
    fontWeight: "700",
    color: colors.black,
  },
  formWrapper: {
    paddingHorizontal: 20,
    marginVertical: 40,
  },
  inputWrapper: {
    marginTop: 18,
  },
  inputLabel: {
    color: colors.gray,
    fontSize: 15,
    fontWeight: "600",
  },
  inputContainer: {
    backgroundColor: colors.lightprimary,
    height: 55,
    marginTop: 6,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    fontSize: 16,
    color: colors.black,
    flex: 1,
  },
  inputIcon: {
    marginLeft: 10,
  },
  checkboxContainer: {
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  checkbox: {
    alignSelf: "center",
  },
  checkboxLabel: {
    marginLeft: 25,
    fontWeight: "500",
    color: colors.gray,
  },
  link: {
    color: colors.primary,
    fontWeight: "700",
    textDecorationLine: "underline",
  },
  btnContainer: {
    paddingHorizontal: 20,
    marginVertical: 30,
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
  loginText: {
    color: colors.darkgrey,
    marginTop: 20,
  },
});

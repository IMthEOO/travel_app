import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Image,
  TextInput,
} from "react-native";
import { Icon } from "react-native-elements";
import colors from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-left"
            type="feather"
            color={colors.darkgrey}
            size={32}
            style={{ marginLeft: -4 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              "Account Update",
              "Are you sure you want to update you account details?",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                { text: "OK", onPress: () => navigation.navigate("Settings") },
              ]
            )
          }
        >
          <View style={[styles.navBtn, { backgroundColor: colors.primary }]}>
            <Icon name="check" type="feather" color={colors.white} size={21} />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ height: "100%", backgroundColor: colors.white }}>
        <View style={styles.headingContainer}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>Account</Text>
          </View>
        </View>

        <View style={styles.formWrapper}>
          <View style={[styles.inputContainer, { alignItems: "flex-start" }]}>
            <Text style={styles.inputLabel}>Photo</Text>
            <View>
              <View style={styles.profileImageContainer}>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/6618822/pexels-photo-6618822.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                  }}
                  style={styles.profileImage}
                />
              </View>

              <Text style={styles.profileImageText}>Upload Image</Text>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Name</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                keyboardType="default"
                value="John Doe"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Gender</Text>
            <View style={[styles.inputWrapper, { flexDirection: "row" }]}>
              <TouchableOpacity>
                <View
                  style={[
                    styles.genderOption,
                    { backgroundColor: colors.primary },
                  ]}
                >
                  <Icon
                    name="male"
                    type="ionicon"
                    color={colors.white}
                    size={17}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.genderOption}>
                  <Icon
                    name="female"
                    type="ionicon"
                    color={colors.darkgrey}
                    size={17}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Age</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                keyboardType="numeric"
                value="24"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                keyboardType="email-address"
                value="johndoe@mail.com"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  navContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 2,
    flex: 1,
    width: "100%",
    backgroundColor: colors.white,
  },
  navBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  headingContainer: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  heading: {
    marginTop: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headingText: {
    fontSize: 32,
    fontWeight: "700",
    color: colors.black,
  },
  formWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 40,
  },
  inputLabel: {
    color: colors.darkgrey,
    fontSize: 18,
    fontWeight: "500",
    width: 100,
  },
  inputWrapper: {
    flex: 1,
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 30,
    marginBottom: 20,
  },
  profileImage: {
    flex: 1,
    borderRadius: 70,
  },
  profileImageText: {
    fontSize: 20,
    color: colors.primary,
    marginLeft: "auto",
    marginRight: "auto",
  },
  input: {
    fontSize: 16,
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#ECEEF2",
    paddingVertical: 10,
  },
  genderOption: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ECEEF2",
    borderRadius: 40,
    marginRight: 15,
  },
});

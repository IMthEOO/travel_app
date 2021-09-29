import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Icon, Switch } from "react-native-elements";
import colors from "../assets/colors/colors";
import propertyData from "../assets/data/propertyData";
import categoryData from "../assets/data/categoriesData";
import { useNavigation } from "@react-navigation/native";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.nav}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>Settings</Text>
          </View>
        </View>

        <View style={styles.settingContainer}>
          <Text style={styles.containerHeading}>Account</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <View style={styles.accountContainer}>
              <View style={styles.profileImageContainer}>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/6618822/pexels-photo-6618822.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                  }}
                  style={styles.profileImage}
                />
              </View>
              <View style={styles.profileInfo}>
                <Text style={styles.profileName}>John Doe</Text>
                <Text style={styles.profileType}>Personal Account</Text>
              </View>
              <View style={styles.btnForward}>
                <Icon
                  name="chevron-right"
                  type="feather"
                  color={colors.darkgrey}
                  size={18}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.settingContainer}>
          <Text style={styles.containerHeading}>Settings</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Languages")}>
            <View style={styles.settingItemContainer}>
              <View
                style={[
                  styles.settingIconContainer,
                  { backgroundColor: "#FFF0E4" },
                ]}
              >
                <Icon
                  name="globe"
                  type="font-awesome"
                  color="#FF6B00"
                  size={22}
                />
              </View>
              <View style={styles.profileInfo}>
                <Text style={styles.profileName}>Language</Text>
              </View>
              <View style={styles.btnForward}>
                <Icon
                  name="chevron-right"
                  type="feather"
                  color={colors.darkgrey}
                  size={18}
                />
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.settingItemContainer}>
            <View
              style={[
                styles.settingIconContainer,
                { backgroundColor: "#E6F8FF" },
              ]}
            >
              <Icon name="bell" type="font-awesome" color="#00A2EE" size={16} />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Notifications</Text>
            </View>
            <View style={styles.btnForward}>
              <Icon
                name="chevron-right"
                type="feather"
                color={colors.darkgrey}
                size={18}
              />
            </View>
          </View>

          <View style={styles.settingItemContainer}>
            <View
              style={[
                styles.settingIconContainer,
                { backgroundColor: "#ECEBFF" },
              ]}
            >
              <Icon name="moon" type="ionicon" color="#551EFE" size={16} />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Dark Mode</Text>
            </View>
            <View
              style={[styles.btnForward, { backgroundColor: "transparent" }]}
            >
              <Switch value={false} color={colors.primary} />
            </View>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("Languages")}>
            <View style={styles.settingItemContainer}>
              <View
                style={[
                  styles.settingIconContainer,
                  { backgroundColor: "#FFE7ED" },
                ]}
              >
                <Icon
                  name="help-buoy"
                  type="ionicon"
                  color="#FD2354"
                  size={20}
                />
              </View>
              <View style={styles.profileInfo}>
                <Text style={styles.profileName}>Help</Text>
              </View>
              <View style={styles.btnForward}>
                <Icon
                  name="chevron-right"
                  type="feather"
                  color={colors.darkgrey}
                  size={18}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  nav: {
    paddingHorizontal: 20,
    marginBottom: 50,
  },

  heading: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headingText: {
    fontSize: 32,
    fontWeight: "700",
    color: colors.black,
  },
  containerHeading: {
    color: colors.gray,
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 30,
  },
  settingContainer: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  accountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  profileImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  profileImage: {
    flex: 1,
    borderRadius: 30,
  },
  profileInfo: {},
  profileName: {
    fontSize: 18,
    fontWeight: "500",
    color: colors.gray,
    marginBottom: 5,
  },
  profileType: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.darkgrey,
  },
  btnForward: {
    width: 40,
    height: 40,
    backgroundColor: "#f4f4f4",
    marginLeft: "auto",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  settingItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 25,
  },
  settingIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 30,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

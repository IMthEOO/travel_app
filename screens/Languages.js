import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import languageData from "../assets/data/languageData";
import { Icon } from "react-native-elements";
import colors from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";

const Languages = () => {
  const navigation = useNavigation();

  const languageCard = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={[styles.languageCard]}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.languageImage}
          />
          <View style={styles.languageTextContainer}>
            <Text style={styles.languageName}>{item.text}</Text>
          </View>

          <View
            style={[
              styles.iconContainer,
              { transform: [{ scale: item.active === true ? 1 : 0 }] },
            ]}
          >
            <Icon
              name="check"
              type="feather"
              color={colors.primary}
              size={24}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const listHeader = () => {
    return (
      <View style={styles.headingContainer}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Language</Text>
        </View>
      </View>
    );
  };

  const listFooter = () => {
    return <View style={{ marginTop: 100 }}></View>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-left"
            type="feather"
            color={colors.darkgrey}
            size={32}
            style={{ marginLeft: -8 }}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={languageData}
        renderItem={languageCard}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={listHeader}
        ListFooterComponent={listFooter}
      />
    </SafeAreaView>
  );
};

export default Languages;

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
  languageContainer: {
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  languageCard: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  languageImage: {
    width: 30,
    height: 30,
  },
  languageTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  languageName: {
    fontSize: 18,
    color: colors.darkgrey,
  },
  iconContainer: {
    marginLeft: 20,
  },
});

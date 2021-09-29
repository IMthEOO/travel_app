import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import colors from "../assets/colors/colors";
import propertyData from "../assets/data/propertyData";
import categoryData from "../assets/data/categoriesData";
import { Rating, AirbnbRating } from "react-native-ratings";
import { useNavigation } from "@react-navigation/native";

const Category = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.navContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.navBtn}>
              <Icon
                name="chevron-left"
                type="feather"
                color={colors.darkgrey}
                size={29}
                style={{ marginLeft: -2 }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <ImageBackground
          style={{ flex: 1 }}
          //We are using online image to set background
          source={{
            uri: item.image,
          }}
        >
          <View style={styles.nav}>
            <View style={styles.heading}>
              <Text style={styles.headingText}>{item.text}</Text>
            </View>
          </View>
        </ImageBackground>

        {/* <FlatList
          data={propertyData}
          renderItem={propertyCard}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        /> */}
      </SafeAreaView>
    </ScrollView>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  nav: {
    paddingHorizontal: 20,
    paddingTop: 70,
    backgroundColor: "rgba(0, 0, 0, .2)",
  },
  heading: {
    marginVertical: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headingText: {
    fontSize: 32,
    fontWeight: "700",
    color: colors.white,
  },
  navContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    paddingHorizontal: 20,
    marginTop: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 2,
    flex: 1,
    width: "100%",
  },
  navBtn: {
    backgroundColor: "#fff",
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});

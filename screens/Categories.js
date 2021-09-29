import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";
import colors from "../assets/colors/colors";
import propertyData from "../assets/data/propertyData";
import categoryData from "../assets/data/categoriesData";
import { Rating, AirbnbRating } from "react-native-ratings";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  const navigation = useNavigation();

  const categoryCard = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Category", {
            item: item,
          });
        }}
      >
        <View style={[styles.categoryCard]}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.categoryImage}
          />
          <View style={styles.categoryTextContainer}>
            <Text style={styles.categoryName}>{item.text}</Text>
          </View>

          <View style={[styles.btnForward]}>
            <Icon
              name="chevron-right"
              type="feather"
              color={colors.darkgrey}
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
          <Text style={styles.headingText}>Categories</Text>
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
        data={categoryData}
        renderItem={categoryCard}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={listHeader}
        ListFooterComponent={listFooter}
      />
    </SafeAreaView>
  );
};

export default Categories;

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
    paddingVertical: 10,
    marginTop: 20,
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
  btnForward: {
    width: 40,
    height: 40,
    backgroundColor: "#f4f4f4",
    marginLeft: "auto",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryCard: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 25,
  },
  categoryImage: {
    width: 40,
    height: 40,
    borderRadius: 12,
    marginRight: 20,
  },
  categoryTextContainer: {},
  categoryName: {
    fontSize: 18,
    color: colors.darkgrey,
  },
});

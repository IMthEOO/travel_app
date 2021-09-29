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
  Image,
} from "react-native";
import { Icon } from "react-native-elements";
import colors from "../assets/colors/colors";
import { Rating, AirbnbRating } from "react-native-ratings";
import { useNavigation } from "@react-navigation/native";

const Details = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
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
        <View style={styles.navBtn}>
          <Icon name="heart" type="feather" color={colors.darkgrey} size={21} />
        </View>
      </View>

      <ScrollView style={{ height: "100%" }}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.propertyImage}
          />
        </View>
        <View style={styles.propertyContainer}>
          <Text style={styles.propertyName}>{item.text}</Text>
          <View style={styles.ratingContainer}>
            <Rating
              type="star"
              startingValue={item.rating}
              ratingCount={5}
              imageSize={18}
              showRating={false}
              style={{ marginVertical: 10, alignItems: "flex-start" }}
            />
            <Text style={styles.totalReviewCount}>
              {"("}
              {item.totalReviewCount}
              {" reviews)"}
            </Text>
          </View>
          <View style={styles.propertyAddressWrapper}>
            <Icon
              name="location-on"
              type="material-icons"
              color={colors.primary}
              size={22}
            />
            <Text style={styles.propertyAddress}>{item.address}</Text>
          </View>
          <View style={styles.propertyDescriptionContainer}>
            <Text style={styles.propertyDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              excepturi harum totam aliquid tempora, deleniti unde qui, facere
              officiis quod repudiandae? At qui quis sed a excepturi saepe fugit
              dolorem.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.propertyPriceWrapper}>
        <Text style={styles.propertyPrice}>
          <Text style={styles.propertyPriceNumber}>
            ${item.price.toLocaleString()}
          </Text>
          /night
        </Text>
        <View style={styles.btnPrimary}>
          <Text style={styles.btnPrimaryText}>Chech Availability</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  imageContainer: {
    height: 300,
    backgroundColor: colors.grey,
  },
  propertyImage: {
    flex: 1,
  },
  propertyContainer: {
    backgroundColor: colors.white,
    borderTopEndRadius: 36,
    borderTopStartRadius: 36,
    position: "relative",
    paddingTop: 25,
    paddingHorizontal: 20,
    top: -35,
  },
  propertyName: {
    fontSize: 24,
    color: colors.gray,
    fontWeight: "600",
  },
  propertyAddressWrapper: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -3,
  },
  propertyAddress: {
    color: colors.darkgrey,
    fontSize: 16,
  },
  propertyDescriptionContainer: {
    marginTop: 15,
  },
  propertyDescription: {
    color: colors.darkgrey,
    fontSize: 16,
  },
  propertyPriceWrapper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  propertyPrice: {
    fontSize: 16,
    color: colors.darkgrey,
    fontWeight: "600",
  },
  propertyPriceNumber: {
    color: colors.primary,
    fontSize: 20,
  },
  btnPrimary: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  btnPrimaryText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "500",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  totalReviewCount: {
    color: colors.darkgrey,
    marginLeft: 7,
  },
});

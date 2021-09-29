import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  Modal,
} from "react-native";
import { Icon, SearchBar } from "react-native-elements";
import colors from "../assets/colors/colors";
import propertyData from "../assets/data/propertyData";
import categoryData from "../assets/data/categoriesData";
import { Rating, AirbnbRating } from "react-native-ratings";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const propertyCard = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Details", {
            item: item,
          });
        }}
      >
        <View
          style={[
            styles.propertyCard,
            { marginLeft: item.id === "1" ? 20 : 0 },
          ]}
        >
          <View style={styles.likeWrapper}>
            <Icon
              name="heart-o"
              type="font-awesome"
              color={colors.darkgrey}
              size={15}
            />
          </View>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.propertyImage}
          />

          <View style={styles.propertyInfo}>
            <View style={styles.ratingContainer}>
              <Rating
                type="star"
                startingValue={item.rating}
                ratingCount={5}
                imageSize={15}
                showRating={false}
                style={{ marginVertical: 5, alignItems: "flex-start" }}
              />
              <Text style={styles.totalReviewCount}>
                {"("}
                {item.totalReviewCount}
                {")"}
              </Text>
            </View>
            <Text style={styles.propertyName}>{item.text}</Text>

            <View style={styles.propertyAddressWrapper}>
              <Icon
                name="location-on"
                type="material-icons"
                color="#b0b0b0"
                size={20}
              />
              <Text style={styles.propertyAddress}>{item.address}</Text>
            </View>
            <View style={styles.propertyPriceWrapper}>
              <Text style={styles.propertyPrice}>
                <Text style={styles.propertyPriceNumber}>
                  ${item.price.toLocaleString()}
                </Text>
                /night
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const categoryCard = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Category", {
            item: item,
          });
        }}
      >
        <View
          style={[
            styles.categoryCard,
            { marginLeft: item.id === "1" ? 20 : 0 },
          ]}
        >
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>{item.text}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.nav}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>Explore</Text>
            <View style={styles.arrow}>
              <Icon name="bell" type="font-awesome" color="#b0b0b0" />
            </View>
          </View>
          <View style={styles.subtitle}>
            <Text style={styles.subtitleText}>Find a place for yourself</Text>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={styles.searchWrapper}>
              <Icon name="search" type="feather" color="#b0b0b0" />
              <Text style={styles.searchText}>Search</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Modal animationType="slide" transparent={false} visible={modalVisible}>
          <View style={styles.searchModal}>
            <View style={styles.searchModalNav}>
              <View>
                <Icon
                  name="search"
                  type="feather"
                  color={colors.darkgrey}
                  size={24}
                />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Search"
                keyboardType="default"
              />
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelBtn}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <FlatList
          data={propertyData}
          renderItem={propertyCard}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <View style={styles.categoryContainer}>
          <View style={styles.categoryHeading}>
            <Text style={styles.categoryHeadingText}>Category</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
              <Text style={styles.categoryHeadingAction}>See more</Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          style={{ paddingBottom: 20 }}
          data={categoryData}
          renderItem={categoryCard}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  nav: {
    paddingHorizontal: 20,
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
  subtitle: {
    marginTop: 10,
  },
  subtitleText: {
    color: colors.gray,
    fontSize: 16,
    fontWeight: "600",
  },
  searchContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  searchWrapper: {
    paddingHorizontal: 20,
    height: 45,
    flexDirection: "row",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 10,
  },
  searchText: {
    marginLeft: 10,
    fontSize: 16,
    color: "grey",
    flex: 1,
  },
  input: {
    marginLeft: 10,
    fontSize: 16,
    color: colors.darkgrey,
    flex: 1,
  },
  categoryContainer: {
    paddingHorizontal: 20,
    marginTop: 5,
  },
  categoryHeading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  categoryHeadingText: {
    fontSize: 20,
    color: colors.gray,
    fontWeight: "600",
  },
  categoryHeadingAction: {
    fontSize: 14,
    color: colors.primary,
  },
  //Property Card Styles
  propertyCard: {
    position: "relative",
    width: 230,
    padding: 5,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 10,
    borderRadius: 16,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  likeWrapper: {
    position: "absolute",
    height: 30,
    width: 30,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    zIndex: 2,
    top: 15,
    right: 15,
  },
  propertyImage: {
    width: 220,
    height: 220,
    borderRadius: 16,
  },
  propertyInfo: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  propertyName: {
    fontSize: 16,
    color: colors.gray,
    fontWeight: "700",
  },
  propertyAddressWrapper: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -3,
  },
  propertyAddress: {
    fontSize: 13,
    color: colors.darkgrey,
  },
  propertyPriceWrapper: {
    marginTop: 5,
    marginBottom: 8,
  },
  propertyPrice: {
    fontSize: 13,
    color: colors.darkgrey,
    fontWeight: "600",
  },
  propertyPriceNumber: {
    color: colors.primary,
    fontSize: 16,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  totalReviewCount: {
    color: colors.darkgrey,
    marginLeft: 7,
    fontSize: 12,
  },
  //Category Crad styles
  categoryCard: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 10,
    borderRadius: 16,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: 20,
    height: 55,
    marginTop: 20,
    marginBottom: 20,
  },
  categoryImage: {
    width: 35,
    height: 35,
    borderRadius: 10,
    marginRight: 10,
  },
  categoryText: {
    color: colors.gray,
    fontSize: 15,
    fontWeight: "500",
    marginRight: 5,
  },
  //Search Modal
  searchModal: {
    paddingTop: 40,
    flex: 1,
  },
  searchModalNav: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  cancelBtn: {
    color: colors.primary,
  },
});

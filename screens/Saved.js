import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Icon } from "react-native-elements";
import colors from "../assets/colors/colors";
import propertyData from "../assets/data/propertyData";
import categoryData from "../assets/data/categoriesData";
import { Rating, AirbnbRating } from "react-native-ratings";
import { useNavigation } from "@react-navigation/native";

const Saved = () => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.nav}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>Saved Property</Text>
          </View>
        </View>

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

export default Saved;

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
});

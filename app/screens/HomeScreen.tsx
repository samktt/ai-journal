import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import DateDisplay from "../components/DateDisplay";
import MainCard from "../components/MainCard";
import Categories from "../components/Categories";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.mainContainer}>
        <DateDisplay />
        <MainCard />
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#F5F6FE",
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

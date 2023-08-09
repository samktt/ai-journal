import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const HomeScreen = () => {
  const currentDate = new Date();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>
          {currentDate.getDate().toString().padStart(2, "0")}
        </Text>
        <Text style={styles.monthYear}>
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  dateContainer: {
    flexDirection: "column",
    paddingLeft: 20,
  },
  date: {
    fontSize: 96,
  },
  monthYear: {
    fontSize: 20,
  },
});

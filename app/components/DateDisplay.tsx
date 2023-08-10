import React from "react";

import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const DateDisplay = () => {
  const currentDate = new Date();
  return (
    <View style={styles.dateContainer}>
      <Text style={styles.date}>
        {currentDate.getDate().toString().padStart(2, "0")}
      </Text>
      <Text style={styles.monthYear}>
        {currentDate.toLocaleString("default", { month: "long" })}{" "}
        {currentDate.getFullYear()}
      </Text>
    </View>
  );
};

export default DateDisplay;

const styles = StyleSheet.create({
  dateContainer: {
    flexDirection: "column",
    marginBottom: 20,
  },
  date: {
    fontSize: 96,
  },
  monthYear: {
    fontSize: 16,
  },
});

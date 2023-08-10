import React from "react";

import { StyleSheet, Text, View } from "react-native";
import ListButton from "./ListButton";

const Categories = () => {
  const categoryTitles = [
    "Gratitude",
    "Work",
    "Family",
    "Friends",
    "Health",
    "Spirituality",
    "Fun",
    "Other",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categories</Text>
      {categoryTitles.map((title) => (
        <ListButton key={title} title={title} />
      ))}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {},
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
});

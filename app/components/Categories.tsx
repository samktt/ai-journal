import React from "react";

import { StyleSheet, Text, View } from "react-native";
import ListButton from "./ListButton";

const Categories = () => {
  const categoryData = [
    { title: "Gratitude", emoji: "😊" },
    { title: "Work", emoji: "💼" },
    { title: "Family", emoji: "👨‍👩‍👦" },
    { title: "Friends", emoji: "👫" },
    { title: "Health", emoji: "🏃‍♂️" },
    { title: "Spirituality", emoji: "🕊️" },
    { title: "Fun", emoji: "🎉" },
    { title: "Other", emoji: "🔮" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categories</Text>
      {categoryData.map(({ title, emoji }) => (
        <ListButton key={title} title={title} emoji={emoji} />
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

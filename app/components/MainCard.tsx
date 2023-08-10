import React from "react";

import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import AppButton from "./Button";
import colors from "../config/colors";

const MainCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Guided Journaling</Text>
      <Text style={styles.subTitle}>
        Affirm and believe in your own greateness
      </Text>
      <AppButton
        title="Start Journey"
        backgroundColor="white"
        color="primary"
        onPress={() => console.log("tapped")}
      />
    </View>
  );
};

export default MainCard;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#CCD2FF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: colors.primary,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 14,
    color: colors.primary,
    marginBottom: 20,
  },
});

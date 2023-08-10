import React from "react";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

interface ListButtonProps extends TouchableOpacityProps {
  title: string;
  backgroundColor?: keyof typeof colors;
  color?: keyof typeof colors;
}

function ListButton({
  title,
  onPress,
  backgroundColor = "white",
  color = "primary",
}: ListButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[backgroundColor] }]}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Text style={[styles.text, { color: colors[color] }]}>{title}</Text>
        <MaterialCommunityIcons
          name="chevron-right"
          color={colors[color]}
          size={30}
        />
      </View>
    </TouchableOpacity>
  );
}

export default ListButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 15,
    justifyContent: "center",
    padding: 15,
    width: "100%",
    marginBottom: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
  },
});

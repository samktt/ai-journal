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
  emoji: string;
  backgroundColor?: keyof typeof colors;
  color?: keyof typeof colors;
}

function ListButton({
  title,
  emoji = "👍",
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
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={[styles.emoji]}>{emoji}</Text>
          <Text style={[styles.text, { color: colors[color] }]}>{title}</Text>
        </View>

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
  emoji: {
    color: colors.white,
    fontSize: 25,
    marginRight: 10,
  },
});

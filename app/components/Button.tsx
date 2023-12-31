import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import colors from "../config/colors";

interface AppButtonProps extends TouchableOpacityProps {
  title: string;
  backgroundColor?: keyof typeof colors;
  color?: keyof typeof colors;
}

const AppButton = ({
  title,
  onPress,
  backgroundColor = "primary",
  color = "white",
}: AppButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[backgroundColor] }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: colors[color] }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

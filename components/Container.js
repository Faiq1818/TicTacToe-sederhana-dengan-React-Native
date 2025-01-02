import { View, Text, StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
import { Box } from "./Box";

export function Container() {
  return (
    <View style={style.border}>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </View>
  );
}

const style = StyleSheet.create({
  border: {
    borderColor: "grey",
    borderWidth: 6,
    borderRadius: 10,
    width: width * 0.8,
    height: width * 0.8,
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
  },
});

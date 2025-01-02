import { View, Text, StyleSheet } from "react-native";

export function Container() {
  return (
    <View style={style.border}>
      <Text>halo</Text>
    </View>
  );
}

const style = StyleSheet.create({
  border: {
    borderColor: "red",
    borderWidth: 10,
    padding,
  },
});

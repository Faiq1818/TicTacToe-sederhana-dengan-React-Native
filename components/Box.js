import { View, StyleSheet, Text } from "react-native";

export function Box() {
  return (
    <View style={style.border}>
      <Text>halo</Text>
    </View>
  );
}

const style = StyleSheet.create({
  border: {
    borderColor: "red",
    borderWidth: 6,
    borderRadius: 10,
    height: "33%",
    width: "33%",
  },
});

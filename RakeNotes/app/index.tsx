import { Text, View, Button } from "react-native";

export default function HomeScreen() {
  return (

    <View style={{ flex: 1, padding: 16 }}>
      <Text>Home Screen</Text>
      <Button title="Add Note" onPress={() => console.log("Add note")} />
    </View>
  );
}

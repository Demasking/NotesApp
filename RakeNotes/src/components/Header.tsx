import { Text, View, Button } from "react-native";

interface HeaderProps {
  title: string;            // the text to display
  onAdd: () => void;        // function called when Add button is pressed
}

export default function Header({title, onAdd}: HeaderProps) {
  return (

    <View style={{ flex: 1, padding: 16 }}>
      <Text>Home Screen</Text>
      <Button title="Add Note" onPress={() => console.log("Add note")} />
    </View>

  );
}

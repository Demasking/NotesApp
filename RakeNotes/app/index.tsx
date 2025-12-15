import { View, Button, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import Header from "../src/components/Header";
import { useRouter, Stack } from "expo-router";
import NotesList from "../src/components/NotesList";

export default function HomeScreen() {
  const router = useRouter();
   const [notes, setNotes] = useState([
    // sample data
    { id: "1", title: "First Note", content: "This is the first note." },
    { id: "2", title: "Second Note", content: "Another note here." },
  ]);

  const handleAddNote = () => {
     console.log("Add Note pressed");//router.push("/edit/new"); // go to edit note screen
  };

  return (
    <>
    <Stack.Screen options={{ headerShown: false }} />


    <View style={{ flex: 1 }}>
      <Header title="My Notes" onAdd={handleAddNote} />
      <NotesList notes={notes} onSelectNote={handleSelectNote} />
    </View>
    </>
  );
}
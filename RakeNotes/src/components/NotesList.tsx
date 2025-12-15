// src/components/NotesList.tsx
import { View, Text, TouchableOpacity } from "react-native";
import { FlashList } from "@shopify/flash-list";

interface Note {
  id: string;
  title: string;
  content: string;
}

interface NotesListProps {
  notes: Note[];
  onSelectNote: (id: string) => void;
}

export default function NotesList({ notes, onSelectNote }: NotesListProps) {
  return (
    <FlashList
      data={notes}
      estimatedItemSize={60} // approximate height of each note item
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onSelectNote(item.id)}>
          <View
            style={{
              padding: 16,
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
              backgroundColor: "#fff",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
      ListEmptyComponent={
        <View style={{ padding: 16 }}>
          <Text style={{ fontStyle: "italic", color: "#555" }}>No Notes</Text>
        </View>
      }
    />
  );
}

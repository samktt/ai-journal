import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type AddScreenProps = {
  closeModal: () => void;
};

const AddScreen: React.FC<AddScreenProps> = ({ closeModal }) => {
  const [journalEntry, setJournalEntry] = useState("");

  const handleSaveEntry = () => {
    // journal saving logic
    console.log("Saving journal entry:", journalEntry);
    closeModal();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
        <Ionicons name="close-circle-outline" size={24} color="gray" />
      </TouchableOpacity>
      <Text style={styles.title}>Write a Journal Entry</Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="What's on your mind?"
        value={journalEntry}
        onChangeText={setJournalEntry}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveEntry}>
        <Text style={styles.saveButtonText}>Save Entry</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  closeButton: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 200,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddScreen;

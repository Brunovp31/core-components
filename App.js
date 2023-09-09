import { StyleSheet, Text, TextInput, View, Button, FlatList } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [contact, setContact] = useState("");
  const [contacts, setContacts] = useState([]); // Lista de contactos

  const addContactHandler = () => {
    if (contact.trim() != "") {
      setContacts([...contacts, { name: contact }]);
      setContact("");
    }
  };

  const renderContactItem = ({ item }) => (
    <View style={styles.contactItem}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Contact information"
          onChangeText={(text) => setContact(text)}
          value={contact}
        />
        <Button title="Add Contact" onPress={addContactHandler} />
      </View>

      <View style={styles.contactsContainer}>
        <Text>List of Contacts:</Text>

        <FlatList
          data={contacts}
          renderItem={renderContactItem}
          keyExtractor={(item) => item.name}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatList: {
    backgroundColor: "#0000"
  },
  appContainer: {
    flex: 1,
    padding: 40,
    paddingTop: 50
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 10,
    padding: 10,
  },
  contactsContainer: {
    flex: 1,
  },
  contactItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});
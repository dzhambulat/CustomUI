import React from "react";
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default function SettingsScreen() {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
}
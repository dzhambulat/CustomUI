import React from "react";
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function HomeScreen() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }
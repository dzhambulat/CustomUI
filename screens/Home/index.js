import React from "react";
import { Text, StyleSheet, View, SafeAreaView } from 'react-native';
import Switcher from '../../components/Switcher'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ebe5ea',
    paddingTop: 50
  },
  backg: {

    backgroundColor: '#ebe5ea',
    height: "500px"
  }
});

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backg} >
        <Switcher />
      </View>
    </SafeAreaView>
  )
}

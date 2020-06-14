import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native'
import AppNavigator from './navigation/AppNavigator'


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator>
      </AppNavigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    ...StyleSheet.absoluteFillObject
  },
});

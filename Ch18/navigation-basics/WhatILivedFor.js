import React from "react";
import { View, Text, Button, StatusBar } from
"react-native";
import styles from "./styles";

export default function WhatILivedFor({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>I want to live deep, and suck out all of marrows of life</Text>
      <Button title="Home" onPress={()=>
        navigation.navigate("Home")} />
    </View>
  );
}
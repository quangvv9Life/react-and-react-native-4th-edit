import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import styles from "./styles";

export default Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>Walden, or life in the wood</Text>
      <Button
        title="What I Lived For"
        onPress={() => navigation.navigate("WhatILivedFor")}
      />
    </View>
  );
}


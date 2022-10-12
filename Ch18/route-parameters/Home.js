import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import styles from "./styles";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text>Walden, or life in the wood</Text>
      <Button
        title="9Health"
        onPress={() => navigation.navigate("Details", { title: "Trained to have a good health" })}
      />
        <Button
          title="9Simplicity"
          onPress={() => navigation.navigate("Details", { title: "with simplicity in living" })}
        />
      <Button
        title="9Life"
        onPress={() => navigation.navigate("Details", { title: "then comes a happy and fulfilled life" })}
      />
    </View>
  );
}

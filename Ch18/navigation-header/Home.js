import React from "react";
import { View, Button, StatusBar } from "react-native";
import styles from "./styles";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Button
        title="9Health"
        onPress={() =>
          navigation.navigate("Details", {
            title: "Good health",
            content: "Trained to have a good health",
            stock: 1,
          })
        }
      />
      <Button
        title="9Simplicity"
        onPress={() =>
          navigation.navigate("Details", {
            title: "With simplicity in living",
            content: "Essential facts of life",
            stock: 0,
          })
        }
      />
      <Button
        title="9Life"
        onPress={() =>
          navigation.navigate("Details", {
            title: "Happy Life",
            content: "Then comes a happy & fullfilled life",
            stock: 200,
          })
        }
      />
    </View>
  );
}
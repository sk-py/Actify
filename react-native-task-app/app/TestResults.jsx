import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { WebView } from "react-native-webview";

const TestResults = () => {
  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: "#f0f0f00" }}>
      <WebView
        source={{
          uri: "https://actify-table.vercel.app/",
        }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

const Styles = StyleSheet.create({});

export default TestResults;

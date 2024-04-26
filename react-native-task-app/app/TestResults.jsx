import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { WebView } from "react-native-webview";

const TestResults = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 7,
        backgroundColor: "#f0f0f00",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 2,
          paddingTop: 20,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          paddingBottom: 15,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "700" }}>Test Results</Text>
        <Text style={{ fontSize: 15, fontWeight: "400", color: "grey" }}>
          Here's a list of Test Results.
        </Text>
      </View>
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

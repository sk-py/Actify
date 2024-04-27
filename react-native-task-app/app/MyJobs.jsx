import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const MyJobs = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>A Dummy Page</Text>
      <Link href={"/TestResults"} style={{ color: "green", marginTop: 15 }}>
        Check Test Results
      </Link>
      <Text style={{ marginVertical: 10 }}>OR</Text>
      <Link href={"/Profile"} style={{ color: "blue" }}>
        Go to Profiles
      </Link>
    </View>
  );
};

export default MyJobs;

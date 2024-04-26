import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import React from "react";
import {
  DrawerContent,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";

const DrawerList = (props) => {
  const navigation = useNavigation();

  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ padding: 20, paddingTop: 60, paddingBottom: -60 }}>
        <Image source={require("../assets/images/drawerIcon.png")} />
      </SafeAreaView>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <View style={styles.logoutBtnContainer}>
          <TouchableOpacity style={styles.logoutBtn} onPress={closeDrawer}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                padding: 5,
                fontWeight: "bold",
              }}
            >
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  logoutBtn: {
    backgroundColor: "#f34d00",
    width: 250,
    marginLeft: 13,
    borderRadius: 7,
    marginTop: 15,
    padding: 3,
  },
  logoutBtnContainer: {
    width: 300,
    display: "flex",
    justifyContent: "center",
  },
});

export default DrawerList;

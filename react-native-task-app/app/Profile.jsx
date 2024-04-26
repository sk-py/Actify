import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  ScrollView,
  Pressable,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import { LinearGradient } from "expo-linear-gradient";

export default Profile = () => {
  const [ActiveTab, setActiveTab] = useState("Personal");

  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  const onSubmit = (data) => {
    console.log("Data", data);
  };

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  const tabsArray = [
    {
      title: "Personal",
    },
    {
      title: "Education",
    },
    {
      title: "Experience",
    },
    {
      title: "Other",
    },
  ];

  return (
    <ScrollView>
      <View style={styles.tabs}>
        {tabsArray.map((tab) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setActiveTab(tab.title);
              }}
              style={ActiveTab == tab.title ? styles.activeTab : styles.tab}
              key={tab.title}
            >
              <Text style={styles.tabText}>{tab.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.container}>
        <View style={styles.gradientView}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#ff5858", "#465ee4"]}
            style={{
              flex: 1,

              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}
          >
            <Text
              style={{
                color: "white",
                padding: 5,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Personal Details
            </Text>
            <Text
              style={{
                color: "white",
                padding: 5,
              }}
            >
              Make changes to your
              <Text style={{ fontWeight: "900" }}> Profile Account</Text> here.
            </Text>
            <Text
              style={{
                color: "white",
                padding: 2,
                width: "50%",
                margin: 5,
                backgroundColor: "#ff5e00",
                borderRadius: 5,
              }}
            >
              Click save when you're done.
            </Text>
          </LinearGradient>
        </View>
        <Text style={styles.label}>
          First name <Text style={{ color: "red" }}>*</Text>
        </Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="firstName"
          rules={{ required: true }}
        />
        <Text style={styles.label}>Middle name</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="middleName"
          rules={{ required: true }}
        />
        <Text style={styles.label}>
          Last name <Text style={{ color: "red" }}>*</Text>{" "}
        </Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="lastName"
          rules={{ required: true }}
        />
        <Text style={styles.label}>
          Email <Text style={{ color: "red" }}>*</Text>
        </Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="demo1234@gmail.com"
              placeholderTextColor={"grey"}
              caretHidden
            />
          )}
          name="email"
          rules={{ required: true }}
        />
        <Text style={styles.label}>
          Phone <Text style={{ color: "red" }}>*</Text>
        </Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="phone"
          rules={{ required: true }}
        />
        <Text style={styles.label}>
          Address <Text style={{ color: "red" }}>*</Text>
        </Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Type your address here."
              placeholderTextColor={"grey"}
            />
          )}
          name="address"
          rules={{ required: true }}
        />

        {/* <View style={styles.button}>
          <Button
            style={styles.buttonInner}
            color
            title="Reset"
            onPress={() => {
              reset({
                firstName: "Bill",
                lastName: "Luo",
              });
            }}
          />
        </View> */}

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.saveBtn}
            onPress={handleSubmit(onSubmit)}
          >
            <Text
              style={{
                textAlign: "center",
                padding: 5,
                color: "white",
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  label: {
    margin: 20,
    marginLeft: 0,
    color: "black",
  },
  saveBtn: {
    margin: 45,
    textAlign: "center",
    backgroundColor: "#ff5e00",
    width: "70%",
    padding: 5,
    borderRadius: 5,
  },
  container: {
    flex: 1,

    justifyContent: "flex-start",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    margin: 4,
    borderRadius: 5,
    backgroundColor: "#ffffff",
  },
  input: {
    backgroundColor: "#dfdfdf",
    borderColor: "#7c7c7c10",
    height: 40,
    padding: 10,
    borderRadius: 4,
    color: "black",
  },
  tabs: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#c2bfbf",
    padding: 10,
    gap: 5,
    width: "95%",
    margin: 10,
    borderRadius: 10,
  },
  tab: {
    padding: 5,
    paddingHorizontal: 15,
  },
  tabText: {
    paddingVertical: 4,
    padding: 2,
    fontWeight: "bold",
  },
  activeTab: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 15,
  },
  gradientView: {},
});

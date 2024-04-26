import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import DrawerList from "../components/DrawerList";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}
      drawerContent={DrawerList}
    >
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Dashboard",
          title: "Dashboard",
          drawerIcon: ({ size, color }) => (
            <MaterialIcons name="dashboard" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Profile",
          title: "Profile",
          drawerIcon: ({ size, color }) => (
            <MaterialIcons name="account-circle" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Inbox" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Inbox",
          title: "Inbox",
          drawerIcon: ({ size, color }) => (
            <MaterialIcons name="inbox" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="MyJobs" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "My Jobs",
          title: "My Jobs",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="document" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="TestResults" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Test Results",
          title: "Test Results",
          drawerIcon: ({ size, color }) => (
            <FontAwesome5 name="clipboard-list" size={24} color="black" />
          ),
        }}
      />
    </Drawer>
  );
}

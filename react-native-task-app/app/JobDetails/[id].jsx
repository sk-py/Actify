import { View, Text, Image } from "react-native";
import React from "react";
import { router, useGlobalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const JobsData = [
  {
    companyName: "TCS",
    status: "On Hold",
    role: "Front-End Developer",
    logo: require("../../assets/images/Tcs.png"), // Using require to load the image
    id: 9876542,
    type: "OnSite",
    location: "Mumbai",
    jobType: "Full Time",
    salary: "500,000₹ - 600,000₹",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias.",
  },
  {
    companyName: "Tech Mahindra",
    status: "Applied",
    role: "Back-End Developer",
    logo: require("../../assets/images/techMh.png"), // Using require to load the image
    id: 2729936,
    type: "Hybrid",
    location: "Pune",
    jobType: "Full Time",
    salary: "500,000₹ - 600,000₹",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias.",
  },
  {
    companyName: "Actify",
    status: "On Hold",
    role: "React Developer",
    logo: require("../../assets/images/splash.png"), // Using require to load the image
    id: 9283661,
    type: "Remote",
    location: "-",
    jobType: "Full Time",
    salary: "500,000₹ - 600,000₹",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias.",
  },
  {
    companyName: "TCS",
    status: "On Hold",
    role: "Front-End Developer",
    logo: require("../../assets/images/Tcs.png"), // Using require to load the image
    id: 9876142,
    type: "Remote",
    location: "-",
    jobType: "Full Time",
    salary: "500,000₹ - 600,000₹",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias.",
  },
  {
    companyName: "Tech Mahindra",
    status: "Applied",
    role: "Back-End Developer",
    logo: require("../../assets/images/techMh.png"), // Using require to load the image
    id: 2720936,
    type: "Hybrid",
    location: "Pune",
    jobType: "Full Time",
    salary: "500,000₹ - 600,000₹",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias.",
  },
  {
    companyName: "Actify",
    status: "On Hold",
    role: "React Developer",
    logo: require("../../assets/images/splash.png"), // Using require to load the image
    id: 9283662,
    type: "Contract",
    location: "Mumbai",
    jobType: "Full Time",
    salary: "500,000₹ - 600,000₹",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem perspiciatis necessitatibus, excepturi ut nam laboriosam doloremque saepe nihil cum vel nisi fuga nobis vitae? Accusamus amet nemo dolores molestias.",
  },
];

const JobDetails = () => {
  const params = useGlobalSearchParams();

  const data = JobsData.filter((job) => {
    return params.id == job.id;
  });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 20,
        }}
      >
        <View style={{ maxHeight: 170, minWidth: 170 }}>
          <Image
            source={data[0]?.logo}
            style={{ maxHeight: 170, minWidth: 170, objectFit: "scale-down" }}
          />
        </View>
        <Text style={{ fontWeight: "800", fontSize: 20, marginTop: 30 }}>
          {data[0]?.role}
        </Text>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 18,
            marginTop: 20,
            color: "gray",
          }}
        >
          {data[0]?.companyName}
        </Text>
        <View
          style={{
            margin: 15,
            padding: 15,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Text style={{ display: "flex", alignItems: "center" }}>
            <Ionicons name="location-outline" size={20} color={"green"} />{" "}
            {data[0]?.location}
          </Text>
          <Text
            style={{
              backgroundColor: "#9ee7ec",
              padding: 10,
              paddingHorizontal: 15,
              borderRadius: 20,
            }}
          >
            {data[0]?.type}
          </Text>
        </View>

        <View
          style={{
            // borderWidth: 0.5,
            borderColor: "grey",
            padding: 50,
            paddingHorizontal: 65,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 30,
            borderRadius: 10,
            elevation: 1,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="time-outline" color={"black"} size={25} />
            {/* {"\n"} */}
            <Text>{data[0]?.jobType}</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="cash-outline" color={"black"} size={25} />
            {/* {"\n"} */}
            <Text>{data[0]?.salary}</Text>
          </View>
          {/* <Text style={{ display: "flex", alignItems: "center" }}>
            {data[0]?.salary}
          </Text> */}
        </View>
        <View style={{ padding: 10, margin: 20 }}>
          <Text style={{ fontWeight: "900", marginBottom: 15 }}>
            About this job :
          </Text>
          <Text>{data[0]?.description}</Text>
        </View>

        <View
          style={{
            margin: 10,
            borderRadius: 5,
            padding: 20,
            paddingHorizontal: 50,
            backgroundColor: "#e9e16dc8",
            elevation: 1,
          }}
        >
          <Text style={{ fontWeight: "700" }}>
            {" "}
            Status :{" "}
            <Text style={{ fontWeight: "900" }}>{data[0]?.status}</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default JobDetails;

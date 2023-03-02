import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { AuthLayout } from "../../Layout/AuthLayout";
import CalendarPicker from "../../components/CalendarPicker";
import {
  textSizes,
  fontWeights,
  colors,
  borderRadius,
  margin,
  padding,
} from "../../theme/config";
import StatusHeader from "../../components/StatusHeader";

import { TextInput } from "react-native-paper";
import Button from "../../components/Buttons";

const ProfileUpdate = () => {
  const [text, setText] = React.useState("");
  return (
    <>
      <StatusHeader />

      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.textHeading}>Profile details </Text>
        </View>

        <View style={styles.input_container}>
          <TextInput
            label="First name"
            value={text}
            mode="outlined"
            activeOutlineColor={colors["brand-text-light"]}
            outlineStyle={{
              borderColor: colors[colors.phoneInputBorder],
              borderWidth: 0.4,
              borderRadius: borderRadius["xl"],
              color: colors["black"],
            }}
            onChangeText={(text) => setText(text)}
            style={styles.input}
          />

          <TextInput
            label="Last Name"
            value={text}
            mode="outlined"
            textColor={colors["black"]}
            outlineStyle={{
              borderColor: colors[colors.phoneInputBorder],
              borderWidth: 0.4,
              borderRadius: borderRadius["xl"],
            }}
            onChangeText={(text) => setText(text)}
            style={styles.input}
            selectionColor={{ textColor: colors["black"] }}
            activeOutlineColor={colors["brand-text-light"]}
          />
        </View>

        <View style={styles.calendarPickerContainer}>
          <CalendarPicker />
        </View>



<View style={styles.confirmbtn}>
        <Button  text="Confirm" onPress={() => console.log("Update")} />
</View>
      </SafeAreaView>
    </>
  );
};

export default ProfileUpdate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colors["white"],
  },

  wrapper: {
    paddding: 10,
  },

  textHeading: {
    fontSize: textSizes["3.5xl"],
    fontWeight: fontWeights["bold"],
    padding: 10,
  },

  input_container: {
    padding: 10,
  },
  input: {
    backgroundColor: colors["white"],
    fontWeight: fontWeights["bold"],
    fontSize: textSizes["sm"],
    // textColor: colors["black"],
    marginTop: margin[1],
  },

  calendarPickerContainer :{
    padding: 10,

  },
  confirmbtn : {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "",

  }
});

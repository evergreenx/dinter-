import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { Colors } from "react-native/Libraries/NewAppScreen";

const NumeberInput = () => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <View style={styles.container}>
        <SafeAreaView style={styles.wrapper}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="NG"
            layout="second"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            // withShadow
            autoFocus
          />
        </SafeAreaView>
      </View>
    </>
  );
};

export default NumeberInput;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: 20,
  },
  wrapper: {
    // flex: 1,
  },
});

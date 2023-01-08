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
import { colors, borderRadius } from "../theme/config";

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
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
          
            // withShadow
            autoFocus
            containerStyle = {{backgroundColor: 'white' , 
          
          
          }}
            textContainerStyle = {{backgroundColor: 'white'}}
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
    backgroundColor: colors.white,
    paddingVertical: 20,
  },
  wrapper: {
    borderColor: colors['phone-input-border'],
    borderWidth: 1,
    borderRadius: borderRadius["xl"],
    paddingHorizontal: 10,


  },
});

// status bar component

import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { colors, borderRadius, textSizes, fontWeights, margin } from "../theme/config";
// import LogoSvg from "../../assets/logo.svg";
// import Button from "./Buttons";
import { StatusBar } from 'expo-status-bar';

const StatusHeader = ({ navigation }) => {

    return (
<>

<StatusBar

animated={true}   style="inverted" />

</>
    )

}

export default StatusHeader;
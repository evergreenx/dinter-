import React, { useState } from "react";
import { View, TouchableOpacity, Text , StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { Calendar } from "react-native-calendars";
import CalendarIcon from "../../assets/calendar.svg";
import { borderRadius, colors, fontWeights, margin, padding, textSizes } from "../../theme/config";

const CalendarPicker = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    toggleModal();
  };

  return (
  
    <>
      <TouchableOpacity onPress={toggleModal} style={styles.calendarPicker}>
        <CalendarIcon />
        <Text style={styles.calendarText}> Choose birthday date </Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
    
          <Calendar onDayPress={onDayPress} />
      
      </Modal>
      {selectedDate !== "" && <Text>You selected: {selectedDate}</Text>}
 </>
  );
};




export default CalendarPicker;



const styles = StyleSheet.create({
  calendarPicker: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
  
    padding: padding[5],
    borderRadius: borderRadius["xl"],
    width: '100%',
    // margin: margin[10],
    backgroundColor: 'pink',
    }
,
  calendarText: {
    fontSize: textSizes["sm"],
    fontWeight: fontWeights["bold"],
    color: colors["brand-red"],
    marginLeft: 10,
  },

});
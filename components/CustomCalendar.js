import { useState } from "react";
import { Text } from "react-native";
import { Modal, Pressable, View } from "react-native";
import { Calendar } from "react-native-calendars";
import AntDesign from '@expo/vector-icons/AntDesign';
import { customCalendarStyles } from "../styles/CalendarStyles";

export default function CustomCalendar({ value, setDate}) {
  const [visible, setVisible] = useState(false);

  function dateSelected(day) {
    setVisible(false);
    const formatted = `${day.day}.${day.month}.${day.year}`;
    //päivitetään pvm suoraan addworkoutScreen komponentille
    setDate(formatted);
  }

  //asetetaan nykyinen päivä maxDate arvoksi
  const today = new Date().toDateString()
  // console.log(today)

  return (
    <View>
      <Modal
        visible={visible}
        transparent={false}
      >
        <Calendar
        style={customCalendarStyles.calendar}
        onDayPress={dateSelected}
        theme={customCalendarStyles.calendarTheme}
        maxDate={today}
        />
      </Modal>
      <Pressable onPress={() => setVisible(true)}>
        <View style={customCalendarStyles.calendarButtonContainer}>
        <AntDesign name="calendar" size={18} color='#333333' />
        <Text style={customCalendarStyles.calendarButtonText}> {value ? value : 'Valitse päivä'}</Text>
        </View>
      </Pressable>
    </View>
  );
}

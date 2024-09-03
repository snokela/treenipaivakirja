import { useEffect, useState } from "react";
import { Text } from "react-native";
import { Modal, Pressable, View } from "react-native";
import { Calendar } from "react-native-calendars";
import AntDesign from '@expo/vector-icons/AntDesign';
import { customCalendarStyles } from "../styles/CalendarStyles";

export default function CustomCalendar({ date, setDate }) {
  const [visible, setVisible] = useState(false);
  const [formattedDate, setFormattedDate] = useState(date);

   useEffect(() => {
    // Päivitetään formattedDate aina, kun date-proppi muuttuu
    setFormattedDate(date);
  }, [date]);

  function dateSelected(day) {
    // console.log(day);
    setVisible(false);
    // const formatted = day.day + '.' + day.month + '.' + day.year;
    const formatted = `${day.day}.${day.month}.${day.year}`;
    setFormattedDate(formatted);
    setDate(formatted);
  }

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
        />
      </Modal>
      <Pressable onPress={() => setVisible(true)}>
        <View style={customCalendarStyles.calendarButtonContainer}>
        <AntDesign name="calendar" size={20} color="black" />
        <Text style={customCalendarStyles.calendarButtonText}> {formattedDate ? formattedDate : 'Valitse päivä'}</Text>
        </View>
      </Pressable>
    </View>
  );
}

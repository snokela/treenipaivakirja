// import { useState } from "react";
// import { Text } from "react-native";
// import { Modal, Pressable, View } from "react-native";
// import { Calendar } from "react-native-calendars";
// import AntDesign from '@expo/vector-icons/AntDesign';

// export default function CustomCalendar() {
//   const [visible, setVisible] = useState(false);
//   const [date, setDate] = useState();

//   function dateSelected(day){
//     console.log(day);  // Tämä tulostaa koko 'day' objektin konsoliin
//     console.log(dateString.day + dateString.month +dateString.year)
//     setVisible(false);
//     setDate(day.dateString);
//   };


//   return (
//     <View>
//       <Modal
//         visible={visible}
//         transparent={true}
//       >
//         <Calendar
//         style={{borderWidth: 2}}
//         onDayPress={dateSelected}
//         />
//       </Modal>
//       <Pressable onPress={() => setVisible(true)}>
//         <View style={{flexDirection: "row", alignItems:'center', borderWidth: 2, borderColor:'#a2d9dc', borderRadius: 5, backgroundColor:'#a2d9dc', padding: 15}}>
//         <AntDesign name="calendar" size={20} color="black" />
//         <Text style={{paddingLeft: 15}}>{date ? date : 'Valitse päivä'}</Text>
//         </View>
//       </Pressable>
//     </View>
//   );
// }

import { useState } from "react";
import { Text } from "react-native";
import { Modal, Pressable, View } from "react-native";
import { Calendar } from "react-native-calendars";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function CustomCalendar() {
  const [visible, setVisible] = useState(false);
  const [formattedDate, setFormattedDate] = useState('');

  function dateSelected(day) {
    console.log(day);  // Tämä tulostaa koko 'day' objektin konsoliin
    setVisible(false);
    // const formatted = day.day + '.' + day.month + '.' + day.year;
    const formatted = `${day.day}.${day.month}.${day.year}`;
    setFormattedDate(formatted);
  }

  return (
    <View>
      <Modal
        visible={visible}
        transparent={false}
      >
        <Calendar
        style={{borderWidth: 1, margin: 15, marginTop: 230 }}
        onDayPress={dateSelected}
        />
      </Modal>
      <Pressable onPress={() => setVisible(true)}>
        <View style={{flexDirection: "row", alignItems:'center', borderWidth: 2, borderColor:'#a2d9dc', borderRadius: 5, backgroundColor:'#a2d9dc', padding: 15}}>
        <AntDesign name="calendar" size={20} color="black" />
        <Text style={{paddingLeft: 15}}>{formattedDate ? formattedDate : 'Valitse päivä'}</Text>
        </View>
      </Pressable>
    </View>
  );
}
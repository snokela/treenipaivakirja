import { StyleSheet } from "react-native";

export const customCalendarStyles =StyleSheet.create ({
  calendar: {
    borderWidth: 1,
    margin: 15,
    marginTop: 230,
  },
  calendarTheme: {
    arrowColor: '#4da7ae',
    todayTextColor:'#4da7ae'
  },
  calendarButtonContainer: {
    flexDirection: "row",
    alignItems:'center',
    borderWidth: 1,
    borderColor:'grey',
    borderRadius: 5,
    backgroundColor:'white',
    padding: 15,
  },
  calendarButtonText: {
    paddingLeft: 15,
  },
});
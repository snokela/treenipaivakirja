// primary color: '#a2d9dc'
import { StyleSheet } from "react-native";
// import CustomCalendar from "../components/CustomCalendar";
// import { Calendar } from "react-native-calendars";

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9f4f6',
    color: '#333333',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 16,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  infoText: {
    justifyContent: 'center',
    paddingTop:10,
    paddingBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});

const customHeaderStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#333333',
    paddingTop:10,
  },
  subtitle: {
    fontSize: 12,
    paddingBottom: 5,
    color: '#77b8bc',
    paddingBottom: 10,
  },
});

const navStyles = StyleSheet.create ({
  headerStyle: {
    backgroundColor: '#d9f4f6',
  },
  headerTintColor: '#333333',
  headerTitleStyle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  tabBarStyle: {
    backgroundColor: '#a2d9dc',
    // backgroundColor: theme.colors.primary,
  },
  tabBarActiveTintColor: 'black',
  // tabBarActiveTintColor: '#b28c23',
  // tabBarInactiveTintColor: '#333333',
});

const buttonStyles= StyleSheet.create ({
  content: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    paddingVertical: 15
  },
  textColor: 'black',
  largeButton: {
    height: 65,
    // width: 300,
    // borderRadius: 10,
    justifyContent: 'center',
    marginBottom: 40,
  },
  smallButton: {
    justifyContent: 'center',
    height: 65,
    width: 110,
    marginHorizontal: 4,
  },
})

const summaryCardStyles= StyleSheet.create ({
  container: {
    ...commonStyles.container,
    paddingBottom: 0,
    justifyContent: 'flex-start',
  },
  summaryCard: {
    backgroundColor: '#a2d9dc',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  // summaryCardTitle: {
  //   justifyContent: 'center',
  //   paddingTop:10,
  //   paddingBottom: 20,
  //   textAlign: 'center',
  //   fontWeight: 'bold',
  // },
  summaryItem: {
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  summaryIcon: {
    paddingBottom: 15,
  },
})

const exerciseCardStyles= StyleSheet.create ({
  exerciseCard: {
    backgroundColor: '#cfeff1',
  },
  rowContainer: {
    flexDirection:'row',
    textAlignVertical: 'center',
  },
  rowContainerText: {
    paddingLeft: 20,
  },
})

const AddWorkoutScreenStyles= StyleSheet.create ({
  segmentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 40,
  },
  formContainer: {
    flex: 3,
  },
  distanceInput: {
    paddingTop: 25,
    paddingBottom: 25,
  },
  timeInput: {
    paddingBottom: 25,
  },
  date: {
    paddingBottom: 25,
  },
  button: {
    flex: 2,
    paddingTop: 100,
  },
})

const workoutHistoryScreenStyles= StyleSheet.create ({
  container: {
    ...commonStyles.container,
    justifyContent: 'flex-start',
    padding: 0,
  },
  flatListContainer: {
    flex: 3,
    paddingBottom: 30,
  },
})

const dividerStyles = StyleSheet.create ({
  divider: {
    backgroundColor:'black',
    marginVertical: 10,
  },
})

const customSegmentedButtonStyles = StyleSheet.create ({
  container: {
    flex: 1,
    // alignItems: 'center',
  },
  buttons: {
    backgroundColor: '#a2d9dc',
    borderRadius: 20,
    marginHorizontal: 2,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const customTextInputStyles = StyleSheet.create ({
  textInput : {
    backgroundColor: 'white',
  },
  activeOutline: {
    color: '#77b8bc',
  },
})

const customRadioButtonStyles = StyleSheet.create ({
  radioContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBlockColor: '#333333',
    borderWidth: 1,
    borderRadius: 10,
    paddingBottom: 40,
    paddingTop: 40,
  },
  radioStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioText: {
    paddingLeft: 13,
  },
  radioColor: {
    color: '#81c2c5',
  }
})

// const calendarTheme = StyleSheet.create ({
//   arrowColor: '#4da7ae',
//   todayTextColor:'#4da7ae',
// })


export { commonStyles , customHeaderStyles, workoutHistoryScreenStyles, navStyles, buttonStyles, summaryCardStyles, AddWorkoutScreenStyles, exerciseCardStyles, dividerStyles, customSegmentedButtonStyles, customRadioButtonStyles, customTextInputStyles }



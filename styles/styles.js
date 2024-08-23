import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9f4f6',
    color: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
  },
});

const customHeaderStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#333333',
  },
  subtitle: {
    fontSize: 12,
    paddingBottom: 5,
    color: '#6dabae',
    // color: '#71c9cf',
  },
});

const navStyles = StyleSheet.create ({
  headerStyle: {
    backgroundColor: '#d9f4f6',
  },
  headerTintColor: '#333333',
  headerTitleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tabBarStyle: {
    backgroundColor: '#a2d9dc',
    // backgroundColor: '#71c9cf',
  },
  tabBarActiveTintColor: 'black',
  // tabBarActiveTintColor: '#b28c23',
  // tabBarInactiveTintColor: '#333333',
});

const buttonStyles= StyleSheet.create ({
    largeButton: {
      height: 65,
      width: 300,
      // borderRadius: 10,
      justifyContent: 'center',
      marginBottom: 40,
    },
    smallButton: {
      justifyContent: 'center',
      height: 50,
      width: 110,
      marginHorizontal: 4,
    },
})

export { commonStyles , customHeaderStyles, navStyles, buttonStyles }



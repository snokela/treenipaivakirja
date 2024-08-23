import { StyleSheet } from "react-native";

const commonStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a2f5fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const customHeaderStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    paddingBottom: 5,
  },
});

export { commonStyle , customHeaderStyle}



import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.yellow,
    borderColor:Colors.yellow,
    borderWidth:1,
    width: '80%',
    alignSelf: 'center',
    paddingVertical: 10,
    margin: 8,
  },
  text: {
    color: "white",
    fontSize: 20,
    textShadowRadius: 0.1,
    textShadowColor: Colors.darkGreen,
    textShadowOffset: { width: 1.2, height: 1.2 }
  }
});
export default styles;

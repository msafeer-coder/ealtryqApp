import {StyleSheet} from 'react-native';
import color from '../../utills/Colors';
import {totalSize, height, width} from 'react-native-dimension';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: width(4),
    backgroundColor: color.white,
    borderWidth:0.7,
    borderColor:color.textBlack,
    width: '80%',
    alignSelf: 'center',
    marginVertical:1,
    height:height(8),
    paddingHorizontal:'5%',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  iconContainer: {
    padding:10,
    paddingRight:15,
    height:height(8.75),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  inputContainerStyle: {
    width:'10%',
    marginHorizontal:10,
    height:height(7.75),
  },
});
export default styles;

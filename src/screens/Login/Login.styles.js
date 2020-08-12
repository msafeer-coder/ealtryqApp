import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerImage:{width:width(100),height:height(20)},
  heading:{width:width(30),height:height(16),alignSelf:'center',marginTop:-height(8),backgroundColor:color.gray,borderRadius:20},
  headingText:{width:width(30),alignSelf:'center',color:color.textBlack,textAlign:'center',marginTop:height(2),fontSize:width(4),marginBottom:height(8)},
textInputContainer:{height:height(19),justifyContent:'space-between'},
forgot:{color:color.textBlack,marginTop:height(1),fontSize:width(4),paddingRight:height(8)},
authButton:{flexDirection:'row',width:width(85),alignSelf:'center'},
google:{backgroundColor:color.red,width:'45%',borderColor:'transparent'},
ffacebook:{backgroundColor:color.blue,width:'45%',borderColor:'transparent'}
});
export default styles;

import * as React from 'react';
import {  View, TouchableOpacity, Dimensions, Text } from 'react-native';
import styles, * as styleConstants from "../constant/styles";
import UserData from "../UserData";
import LottieView from 'lottie-react-native';
import i18n from '../i18n';
const { width, height } = Dimensions.get('window')

export default function App ({ navigation, noBack }){
 
  const onPress=()=>{
    UserData.setTutor2();
    navigation.goBack();
    navigation.goBack();
}
  return (
            <TouchableOpacity style={styles.tutorBackground} onPress={onPress}> 
            <View style={{bottom:40,width:280,
    height:80,
    backgroundColor:"#1BC300",
    borderRadius:10,
    alignItems:"center",
     justifyContent:"center"}}>
                <Text style={{fontSize:22, marginHorizontal:10, color:"#FFFFFF", textAlign: 'center'}}>{i18n.t("tutorial2")}</Text>
                </View>
            <LottieView 
            style={{top:0.1*width}}
            //fill={styleConstants.mainColor}
              source={require('./assets/clickhere.json')} autoPlay loop
              width="100%" height="100%"
            >
            </LottieView>
            </TouchableOpacity>

 )
}

import * as React from 'react';
import { ActivityIndicator, View, TouchableOpacity, Dimensions, Text } from 'react-native';
import i18n from '../i18n';
import styles, * as styleConstants from "../constant/styles";
import UserData from "../UserData";
import LottieView from 'lottie-react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
const { width, height } = Dimensions.get('window')

export default function App ({ navigation, noBack }){
  const onPress=()=>{
    
    UserData.setTutor3();
    navigation.goBack();
    
}
  return (
            <TouchableOpacity style={styles.tutorBackground} onPress={onPress}> 
            <View style={styles.tutStyle}>
                <Text style={{fontSize:22, marginHorizontal:10, color:"#FFFFFF", textAlign: 'center'}}>{i18n.t("tutorial3")}</Text>
                </View>
            <LottieView 
            style={{top:-0.2*width}}
            //fill={styleConstants.mainColor}
              source={require('./assets/swipelefttoright.json')} autoPlay loop
              width="100%" height="100%"
            >
            </LottieView>
            </TouchableOpacity>

 )
}

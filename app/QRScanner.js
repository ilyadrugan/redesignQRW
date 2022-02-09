import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import BackScannerSVG from "./Pages/assets/backScanner.svg";
import { BarCodeScanner } from 'expo-barcode-scanner';
import UserData from "./UserData";
import styles, * as styleConstants from "./constant/styles";

export default  function App({ navigation, noBack }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const { width, heigth } = Dimensions.get('window')
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
      
    })();
  }, []);
  //console.log(hasPermission)
  if (hasPermission === null) {
    return <Text></Text>;
  }
  if (hasPermission === false) {
   //navigation.replace("Loading");
  //setTimeout(onPressBack,400);
    return Alert.alert(
      "Доступ ограничен",
      "Для использования приложения требуется доступ к камере"
    );
  }


  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);

    console.log("scanned", data);
    navigation.replace("NewMain");
    UserData.isNewCode=true;
    UserData.insertQR({ content: data });
    
  };
  const onPressBack = (e) => {
    navigation.replace("NewMain");         
}
    

  return (
    <View style={{backgroundColor: "#ffffff", flex:1, justifyContent:"flex-end"}}>
      
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <TouchableOpacity
        onPress={onPressBack} style={{top:90,right:28}}>
        <BackScannerSVG width="24%" height="24%" fill={styleConstants.mainColor}  style={{margin:10}}/>
        
      </TouchableOpacity>
    </View>
  );

}

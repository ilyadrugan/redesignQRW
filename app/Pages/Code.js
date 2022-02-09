import React from "react";
import { Text, View, TouchableOpacity,TouchableWithoutFeedback,Keyboard } from "react-native";
import styles, * as styleConstants from "../constant/styles";
import GestureRecognizer from "react-native-swipe-gestures";
import UserData from "../UserData";
import QRCode from "react-native-qrcode-svg";
import Barcode from "react-native-barcode-svg";


export default function App({ navigation, focus }) {

  const { selected, name, content, codeType } = UserData.getDataToShow();
  console.log(focus)
  console.log(UserData.getDataToShow(), "code");
  const configGesture = {
    velocityThreshold: 0,
    directionalOffsetThreshold: 80,
  };
  return (
    
    <GestureRecognizer
    
    // onSwipeLeft={() => !focus?UserData.nextQR():null}
    // onSwipeRight={() => !focus?UserData.prevQR():null}
    // onTouchStart={()=> Keyboard.dismiss}
    config={configGesture}
    
  >
   
      
        <QRCode size={250} value={content}/>
      {/* <Barcode size={50} value={content} format="CODE128"/> */}
    
  </GestureRecognizer>
 )
  }
  // else{ 
  //   return (
  //   <GestureRecognizer
  //   onSwipeLeft={() => UserData.nextQR()}
  //   onSwipeRight={() => UserData.prevQR()}
  //   config={configGesture}
    
  // >
  //     <QRCode size={250} value={content}/>
  // </GestureRecognizer>)
  // }
//}

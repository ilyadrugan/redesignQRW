import ArrSVG from "./assets/plus.svg";
import OkSVG from "./assets/ok.svg";
import QRCode from "react-native-qrcode-svg";
import AddSVGCamera from "./assets/camera.svg";
import AddSVGGallery from "./assets/gallery.svg";
import DelSVG from "./assets/trash.svg";
import React from "react";
import UserData from "../UserData";
import Loading from "./Loading";
import BottomSheet from 'react-native-bottomsheet-reanimated';
import Code from "./Code";
import GestureRecognizer from "react-native-swipe-gestures";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {KeyboardAvoidingView, AppState, TouchableOpacity,  View, StyleSheet, Text, Image, Dimensions, Platform,FlatList, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import styles from "../constant/styles";
import picker from "../Picker";

import i18n from '../i18n';

const iosApp = "https://apps.apple.com/ru/app/qrw/id1577156778";
const andrApp = "https://play.google.com/store/apps/details?id=com.qrw";
var f = true;
var fl = true;
var fll = true;
export default class Screen extends React.Component {
    appState = AppState.currentState;
    shouldInit = true;
    constructor(props) {
        super(props);
        
        if (!this.shouldInit) return;
        this.shouldInit = false;
        this.state = UserData.getDataToShow();
        this.state = {
          isFirstLaunch: false,
          hasCheckedAsyncStorage: false,
          isLoading:true,
          isFocused: false,
          valueName:this.state.name
        };
        this.updateState = this.updateState.bind(this);
      }
      async  updateState() {
        this.setState({
          ...UserData.getDataToShow("updateState"),
        });
        
      }
    
       componentDidMount() {
       AppState.addEventListener("change", this.handleAppStateChange);
       UserData.addChangeListener(this.updateState);
        
        AsyncStorage.getItem("kSelected").then((token) => {
          this.setState({
            isLoading: false
          });
        });
        console.log("componentDidMount")
        
      }   
      componentWillUnmount() {
        
        UserData.storeData();
        AppState.removeEventListener("change", this.handleAppStateChange);
        UserData.removeChangeListener();
       }
    
      handleAppStateChange = (nextAppState) => {
        if (
          this.appState.match(/inactive|background/) &&
          nextAppState === "active"
        ) {
        } else {
          UserData.storeData();
        }
        this.appState = nextAppState;
      };

      handleInputFocus = () => this.setState({ isFocused: true })
      handleInputBlur = () => this.setState({ isFocused: false })
      
      
    render() {
     
      //console.log(i18n.locale);
      console.log("render")
      // const configGesture = {
      //   velocityThreshold: 0,
      //   directionalOffsetThreshold: 80,
      // };
      const { isFocused } = this.state;
      const { navigation } = this.props;
      // console.log("newCode?",UserData.isNewCode)
      const { selected, name, content, codeType } = UserData.getDataToShow();
      console.log(content, name);
      console.log("isFirst?",UserData.isFirst);
      console.log("isFirstAdd?",UserData.isFirstAdd);
      console.log("isFirstAdd2?",UserData.isFirstAdd2);
      console.log("flag?",fl);
      console.log("flag2?",f);
      console.log("flag3?",fll);
      
      const bsDel = React.createRef();
      //const fallDel = new Animated.Value(1);
      const bs = React.createRef();
      //const fall = new Animated.Value(1);
      //this.setState({ valueName: name })
      //if(n.newCode) ti.focus();
      const onPressGal = (e) => {
        navigation.replace("Loading");
        picker((data) => {
          console.log("picker", data);
          UserData.insertQR({ content: data.data }, data.type);   
          setTimeout(onMain,100);      
      });
      
      //setTimeout(onMain,3400);
      }
      const onMain = (e) => {
        navigation.replace("NewMain");          
      }
      const onPressCam = (e) => {
        navigation.replace("QRScanner");          
      }

      const t = ()=>{
        UserData.renameQR(this.state.valueName, selected);
        setTimeout(Keyboard.dismiss,50); 
        
      }

    
    if (this.state.isLoading) {
      return <Loading />;
    }
    else if(!UserData.qrArray.length){
      if(UserData.isFirst&&fl){navigation.navigate("Tutorial");fl=false}
        return(
          <View
          style={styles.container}
        >      
        
          <View style={styles.containerSecondary}>
          <QRCode color='#00000040' size={250} value={Platform.OS === "ios"?iosApp:andrApp}/>  
          
          <View style={styles.containerRow}>
            <TextInput
            multiline={true}
            maxLength={80}
            style={styles.textInputStyle2}
            defaultValue={name}
            placeholder={i18n.t("nameOfqr")}
            editable={false}
          />
          
          </View>
          
       
          <View style={{backgroundColor:"white"}}>
        <TouchableOpacity  activeOpacity={0.1} onPress={()=> bs.current.snapTo(0)}>
          <View style={{flexDirection:"column", width:100, height:100,  alignItems:"center", justifyContent:"center"}}>
            
          <ArrSVG width="45%" height="45%"/>
          </View>
        </TouchableOpacity>
            
          </View>
          <BottomSheet
          bottomSheerColor="#FFFFFF"
          ref={bs}
          initialPosition={0}
          snapPoints={[320, '0%']}
          isBackDrop={true}
          isBackDropDismissByPress={true}
          isRoundBorderWithTipHeader={false}
          body={
          <View style={styles.containerAdd}>
          <Text style={styles.titleText}>{i18n.t("addqr")}</Text>
          <View style={{marginVertical:50, alignItems:"flex-start"}}>
            <TouchableOpacity style={styles.containerRow2} onPress={onPressCam}>
              <AddSVGCamera/>
              <Text style={{fontSize:24,marginHorizontal:10}}>{i18n.t("addPhoto")}</Text>
            </TouchableOpacity>
            <View style={styles.palkaHorizont}></View>
            <TouchableOpacity style={styles.containerRow2} onPress={onPressGal}>
              <AddSVGGallery/>
              <Text style={{fontSize:24,marginHorizontal:10}}>{i18n.t("addGal")}</Text>
            </TouchableOpacity>
          </View>
          </View>
          }
        />
        </View>
        </View>)
        
      }
    else{
    if(UserData.isFirstAdd&&f){navigation.navigate("Tutorial2"); f= false; }
    else if(UserData.isFirstAdd2&&UserData.qrArray.length>=2&&fll) { navigation.navigate("Tutorial3");fll= false;}
      return (
        
        <GestureRecognizer
        onSwipeUp={()=> bs.current.snapTo(0)}
        onSwipeLeft={() => !isFocused?UserData.nextQR():null}
    onSwipeRight={() => !isFocused?UserData.prevQR():null}
      style={styles.container}>      
     
      <View style={styles.containerSecondary} >
        <Code navigation={navigation} focus={isFocused} />  
        
        <View style={styles.containerRow}>
        
          <TextInput
           
            multiline={true}
            maxLength={80}
            style={isFocused?styles.textInputStyle:styles.textInputStyle2}
            defaultValue={name}
            placeholder={i18n.t('newqr')}
            onBlur={this.handleInputBlur}
            onFocus={this.handleInputFocus} 
            onChangeText={(text) => { this.setState({ valueName: text})}}
            // autoFocus={UserData.isNewCode==true?true:false}
          />
          {!isFocused?
            <TouchableOpacity onPress={()=> bsDel.current.snapTo(0)}>
              <View style={{left:16,width:50, height:64,  alignItems:"center", justifyContent:"center"}}>
                <DelSVG/>
              </View>
            </TouchableOpacity>:
            <TouchableOpacity onPress={t}>
              <View style={{left:16,width:50, height:64,  alignItems:"center", justifyContent:"center"}}>
                <OkSVG/>
              </View>
            </TouchableOpacity>}  
        
        </View>
        <Text style={{fontSize:20, color:"#C2C2C2" }} >{selected+1}/{UserData.qrArray.length}</Text>
        <View style={{backgroundColor:"white"}}>
          <TouchableOpacity onPress={()=> bs.current.snapTo(0)}>
          <View style={{flexDirection:"column", width:100, height:100,  alignItems:"center", justifyContent:"center"}}>
            
            <ArrSVG width="45%" height="45%"/>
          </View>
          </TouchableOpacity>
          
        </View>
        
      
        <BottomSheet
          bottomSheerColor="#FFFFFF"
          ref={bs}
          initialPosition={0} 
          snapPoints={[320, '0%']}
          isBackDrop={true}
          isBackDropDismissByPress={true}
          isRoundBorderWithTipHeader={false}
          body={
          <View style={styles.containerAdd}>
          <Text style={styles.titleText}>{i18n.t("addqr")}</Text>
          <View style={{marginVertical:50, alignItems:"flex-start"}}>
            <TouchableOpacity style={styles.containerRow2} onPress={onPressCam}>
              <AddSVGCamera/>
              <Text style={{fontSize:24,marginHorizontal:10}}>{i18n.t("addPhoto")}</Text>
            </TouchableOpacity>
            <View style={styles.palkaHorizont}></View>
            <TouchableOpacity style={styles.containerRow2} onPress={onPressGal}>
              <AddSVGGallery/>
              <Text style={{fontSize:24,marginHorizontal:10}}>{i18n.t("addGal")}</Text>
            </TouchableOpacity>
          </View>
          </View>}
          
        />
        <BottomSheet
        bottomSheerColor="#FFFFFF"
        ref={bsDel}
        initialPosition={0} 
        snapPoints={[380, '0%']}
        isBackDrop={true}
        isBackDropDismissByPress={true}
        isRoundBorderWithTipHeader={false}
        
        body={
          <View style={styles.containerDel}>
          <Text style={styles.titleTextDel}>{i18n.t("delqr")}</Text>
          {//this.state.valueName!=""?" \""+this.state.valueName+"\"":""}
        }
          <View style={{marginVertical:20, alignItems:"center"}}>
            <TouchableOpacity style={styles.buttonRed} onPress={()=>{bsDel.current.snapTo(1);UserData.deleteItem();}}>
  
              <Text style={{fontSize:24,marginHorizontal:10, color:"white"}}>{i18n.t("yesDel")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonGray} onPress={()=> bsDel.current.snapTo(1)}>
              <Text style={{fontSize:24,marginHorizontal:10, color:"#8F8F8F"}}>{i18n.t("noDel")}</Text>
            </TouchableOpacity>
          </View>
          </View>}

      />  
  </View>   
  
    </GestureRecognizer>
        
        )
    }
  }
}
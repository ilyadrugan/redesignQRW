import { StyleSheet, Dimensions } from "react-native";
import { RawButton } from "react-native-gesture-handler";
import { useFonts } from 'expo-font';
export const mainColor = "#000000";
const backColor = "#ffffff";
const { width, height } = Dimensions.get('window')
const inconSize = 65;

export default styles = StyleSheet.create({
  tutStyle:{
    width:280,
    height:80,
    backgroundColor:"#1BC300",
    borderRadius:10,
    alignItems:"center",
     justifyContent:"center"
  },
  tutBack:{
    width:250,
    height:80,
    backgroundColor:"#1BC300",
    borderRadius:10
  },
  buttonRed:{
    width:width-60,
    height:52,
    backgroundColor:"#FF4545",
    borderRadius:10,
    alignItems:"center",
    justifyContent: "space-evenly",
    marginVertical:10
  },
  buttonGray:{
    width:width-60,
    height:52,
    backgroundColor:"#E4E4E4",
    borderRadius:10,
    alignItems:"center",
    justifyContent: "space-evenly",
  },
  containerDel:{
    padding:20,
    backgroundColor: 'white',
    height: 500,
    alignItems: "center",
    flexDirection:"column",
  },
    containerAdd:{
    padding:10,
    backgroundColor: 'white',
    height: 500,
    alignItems: "center",
    flexDirection:"column",
  },
  palkaHorizont:{
    width:width*0.8,
    borderColor: '#D0D0D0',
    borderBottomWidth: 1,
    margin:20
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  containerChoose: {
    flex: 1,
    marginTop:200,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: "8%",
    justifyContent: "space-evenly",
  },
  containerSecondary: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  containerCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerBottom: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 110,
  },
  containerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",

  },
  containerRow2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal:20
  },
  container2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  titleText: {
    fontSize: 25,
    fontWeight:"bold"
  },
  titleTextDel: {
    fontSize: 25,
    fontWeight:"bold",
    marginLeft:20
  },
  textError: {
    borderColor: "red",
    backgroundColor: "rgba(255,0,47, 0.1)",
  },

  icon: {
    height: inconSize,
    width: inconSize,
    borderColor: "#000000",
    position: "absolute",
  },

  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 8,
  },

  button: {
    margin: 8,
    alignSelf: "center",
    borderColor: mainColor,
    borderWidth: 2,
    paddingHorizontal: 12,
    paddingVertical: 3,
  },
  buttontext: {
    fontSize: 20,
    color: mainColor,
    textAlign: "center",
  },
  buttonMargin: {
    marginVertical: 20,
  },

  dialog: {
    padding: 20,
    width: "90%",
    maxWidth: 400,
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  tutorBackground:{
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    padding: "8%",
    alignItems: "center",
    justifyContent: "center",
  },
  textInputStyle:{
    left:10,
    borderWidth: 0,
    borderBottomWidth: 2,
    padding: 10,
    fontSize:24,
    width:220
  },
  textInputStyle:{
    left:10,
    borderWidth: 0,
    borderBottomWidth: 3,
    padding: 10,
    fontSize:24,
    width:226
  },
  textInputStyle2:{
    left:10,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor:"#C2C2C2",
    padding: 10,
    fontSize:24,
    width:226
    
  }
});

import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeEventEmitter } from "react-native";


const kSelected = "kSelected";
const kqrArray = "kqrArray";
const ktypeArray = "ktypeArray";
const ktutor="ktutor";
const kFirstLaunch = "kFirstLaunch";
const kFirstAdd = "kFirstAdd";
const kFirstAdd2 = "kFirstAdd2";

class UserData extends NativeEventEmitter {
  selected = 0;
  qrArray = [];
  isFirst=true;
  isFirstAdd=true;
  isFirstAdd2=true;
  isNewCode=false;
  //typeArray = new Map();
  tutorValue= "-";
    constructor(props) {
    super(props);
    this.getAllDataFromStorage();
    
  }

 

  // isFirst(){
  
  //   this.getTutorValue();
  //   //console.log('first?', this.tutorValue );
   
  //   if (this.tutorValue!=="no") {
  //     return true;
  //   }
  //   else{
  //     return false;
  //   } 
  // }


// getTutorValue = async () => {
//   //console.log('getTutorValue');
//     const value = await AsyncStorage.getItem(ktutor)
//     if(value !== null) {
//       this.tutorValue = value;
//     //console.log(this.tutorValue);
//     }

// }

  
  async getAllDataFromStorage() {
    console.log("getAllDataFromStorage");

    a = AsyncStorage.getItem(kSelected)
      .then((el) => (this.selected = el && !isNaN(el) ? parseInt(el) : 0))
      .catch((e) => {
        this.selected = 0;
      });

    b = AsyncStorage.getItem(kqrArray)
      .then((el) => {
        this.qrArray = el ? JSON.parse(el) : [];
      })
      .catch((e) => {
        this.qrArray = [];
      });
      var c = AsyncStorage.getItem(kFirstLaunch)
      .then((el) => {
        this.isFirst = el ? JSON.parse(el) : true;
      })
      .catch((e) => {
        this.isFirst = true;
      });
      var d = AsyncStorage.getItem(kFirstAdd)
      .then((el) => {
        this.isFirstAdd = el ? JSON.parse(el) : true;
      })
      .catch((e) => {
        this.isFirstAdd = true;
      });
      var f = AsyncStorage.getItem(kFirstAdd2)
      .then((el) => {
        this.isFirstAdd2 = el ? JSON.parse(el) : true;
      })
      .catch((e) => {
        this.isFirstAdd2 = true;
      });
    await a;
    await b;
    await c;
    await d;
    await f;
    this.emitChange();
  }

  getDataToShow() {
    //console.log(this.qrArray, "to show");
    if (this.qrArray.length == 0) {
      return { content: null };
    } else {
      return {
        //false: this.firstCode,
        selected: this.selected,
        ...this.qrArray[this.selected],
        //type: this.typeArray[this.selected],
      };
    }
  }

  renameQR(name, index = this.selected || 0) {
    console.log(name,"rename QR")
    this.qrArray[index].name = name;
    this.emitChange();
  }

  replaceQR(code, index = this.selected || 0) {
    this.qrArray[index].content = code;
    this.emitChange();
  }

  async nextQR() {
    console.log("nextQR")
    this.selected = (this.selected + 1) % this.qrArray.length;
    this.emitChange();
  }
  async prevQR() {
    console.log("prevQR")
    this.selected = (this.selected + this.qrArray.length - 1) % this.qrArray.length;
    this.emitChange();
  }

  async deleteItem(index = this.selected) {
    console.log("delete")
    this.qrArray.splice(index, 1);
    //this.typeArray.splice(index, 1);
    this.selected = this.selected % this.qrArray.length; 
    this.emitChange();
  }

  async insertQR(elem, type) {
    console.log(type);
    let { qrArray, selected} = this;
    elem = { name: "", ...elem, codeType: type};

    qrArray = qrArray || [];
    selected = selected || 0;
    console.log(this.qrArray, "insert");
    this.qrArray = [...qrArray.splice(0, selected + 1), elem, ...qrArray];
    console.log(this.qrArray, "insertED");
    this.selected = (selected + 1) % this.qrArray.length;
    //this.typeArray.set(type);
    this.emitChange();
  }

  async storeData() {
    await AsyncStorage.setItem(kSelected, this.selected.toString());
    await AsyncStorage.setItem(kqrArray, JSON.stringify(this.qrArray));
    //await AsyncStorage.setItem(kFirstLaunch, JSON.stringify(false));
    //await AsyncStorage.setItem(kqrArray, JSON.stringify(this.typeArray));
  }
  async setTutor1(){
    await AsyncStorage.setItem(kFirstLaunch, JSON.stringify(false));
  }
  async setTutor2(){
    await AsyncStorage.setItem(kFirstAdd, JSON.stringify(false));
  }
  async setTutor3(){
    await AsyncStorage.setItem(kFirstAdd2, JSON.stringify(false));
  }
  async clearCache() {
    await AsyncStorage.clear();
  }

  addChangeListener(callback) {
    this.addListener("data.change", callback);
  }

  removeChangeListener(callback) {
    this.removeAllListeners("data.change", callback);
  }

  emitChange() {
    this.emit("data.change");
  }
}

export default new UserData();

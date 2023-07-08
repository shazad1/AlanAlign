import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import BlinkView from 'react-native-blink-view'

import { StyleSheet, Text, View,Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window')
function roundOff(v) {
  return Math.round(v)
}

function dimensions() {

  var _borderRadius = roundOff((height + width) / 2),
      _height = roundOff(height),
      _width = roundOff(width)

  return { _borderRadius, _height, _width }
}
export default function App() {

  [show, setShow] = useState(true)
  useEffect(() => {
    var counter = 0;
    
    var oneSecInterval = setInterval(() =>{
       setShow(!show)

        if (counter == 50) {
            clearInterval(oneSecInterval);
        }
    }, 250
    );
}, []);
  return (
    <View style={styles.container}>
        <View style={styles.subContainer}>
        <View style={styles.circle}>

        <View style={{position: 'absolute', opacity: show ? 0 :1, top: dimensions()._height *0.12, left: 30, width: 70, height: 10, backgroundColor: '#000'}} />
        </View>
        
        </View>
        <View style={styles.subContainer}>
        <View style={styles.circle}>
        <View   style={{position: 'absolute',  top: dimensions()._height *0.12, opacity: show ? 1 :0,  left: dimensions()._height *0.12, width: 70, height: 10, backgroundColor: '#000'}} />
        </View>
       </View>
    </View>
  );
}
const commonStyles = { alignItems: 'center', justifyContent: 'center', }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    borderWidth: 5,
    borderColor: '#000',
    margin: 40
  },
  subContainer: {
    flex: 1,
    backgroundColor: '#ff0',
    height: '50%',
    width: '100%',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,


  },


  circle: { 
    height: dimensions()._height * 0.3,
     width: dimensions()._height * 0.3, 
     position: 'relative',
    borderRadius: dimensions()._borderRadius,
     borderWidth: 25, 
     borderColor: '#000',
      ...commonStyles }
});

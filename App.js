import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useState} from 'react';

export default function App() {
  const [Cont1, setCont1] = useState(''); 
  const [Cont2, setCont2] = useState('');
const [Result, setResult] = useState('');

const Plus = () => {
setResult(parseInt(Cont1) + parseInt(Cont2));
}

const Minus = () => {
setResult(parseInt(Cont1) - parseInt(Cont2));

}






  return (
    <View style={styles.container}>

      <Text>Result: {Result}</Text>
      <TextInput style={styles.textbox} 
      keyboardType='number-pad'
      onChangeText={setCont1}
        >
      </TextInput>
      <TextInput style={styles.textbox}
      keyboardType='number-pad'
      onChangeText={setCont2}
      ></TextInput>
      <View style={styles.operators}>
<View style={styles.buttons}>
<Button title="+" onPress={Plus}></Button>
      </View>
      <View style={styles.buttons}>
<Button title="-" onPress={Minus}></Button>
      </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textbox: {
borderColor: 'black',
borderWidth: 2,
padding: 7,
width: '50%',
margin: 10,
  },
  operators: {
flexDirection: 'row',
justifyContent: 'space-evenly',
  },
  buttons: {
width: '20%',
borderColor: 'black',
borderWidth: 2,
margin: 10,

  }
});

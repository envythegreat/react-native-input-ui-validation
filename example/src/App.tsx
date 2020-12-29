import * as React from 'react';

import { StyleSheet, View, Button, Alert} from 'react-native';
import {TextInput} from 'react-native-input-ui-validation';


export default function App() {
  const [result, setResult] = React.useState();
  const getResult = (e: any) =>{
    setResult(e)
  }
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      result,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );


  return (
    <View style={styles.container}>
      <TextInput iconName="mail" placeholder="Email" refs="Email" handleState={getResult} keyBoardType="email-address"/>
      <TextInput iconName="lock" placeholder="Password" refs="Password" handleState={getResult} keyBoardType="default" isPassword />
      <TextInput iconName="credit-card" placeholder="Credit card" refs="CreditCard" handleState={getResult} keyBoardType="phone-pad"/>
      <TextInput iconName="calendar" placeholder="Birthday (DD/MM/YYYY)" refs="Birthday" handleState={getResult} keyBoardType="default"/>
      <TextInput iconName="map-pin" placeholder="Address" refs="Address" handleState={getResult} keyBoardType="default"/>
      <TextInput iconName="mail" placeholder="TextArea" refs="TextArea" handleState={getResult} keyBoardType="default" multiline numberofLines={4} />
      <Button title="check" onPress={createTwoButtonAlert}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

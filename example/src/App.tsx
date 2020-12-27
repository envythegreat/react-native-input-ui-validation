import * as React from 'react';

import { StyleSheet, View, Button, Alert} from 'react-native';
import TextInput from 'react-native-input-ui-validation';


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

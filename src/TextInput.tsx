import React,{useState} from 'react'
import { View, Text, TextInput as Input, Dimensions, StyleSheet } from 'react-native';
import {validate, ValidateColors} from './config'
import {Feather as Icon} from "@expo/vector-icons"
import { TextInputMask } from 'react-native-masked-text'
const {width,height} =  Dimensions.get('window')

interface TextInputProps{
  iconName: string;
  placeholder: string;
  keyBoardType: string;
  isPassword: boolean;
  multiline: boolean;
  numberofLines: number;
  isMasked: boolean;
  maskFormat: string;
  handleState: (value: String) => void;
  refs: String;
}

const TextInput: React.FC<TextInputProps> = (
  // {
  //   iconName ,
  //   placeholder,
  //   keyBoardType,
  //   isPassword,
  //   multiline,
  //   numberofLines,
  //   isMasked,
  //   maskFormat,
  //   handleState,
  //   refs
  // }
) =>{

  const [inputValue, setInputValue] = useState('');
  const [checkOrX, setCheckOrX] = useState(null);
  const [isError, setIsError] = useState(null);

  return (
    <></>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderWidth: 1,
    width: width * 0.8,
    borderRadius: 5,
    marginVertical: 20,
    marginBottom: 2
  },
  textAreaContainer: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 5,
    width: width * 0.8,
    borderRadius: 5,
    marginVertical: 20,
    marginBottom: 2,
  },
  errorTxt:{
    fontSize: 14,
    color: 'red',
  },
  myerr:{
    textAlign: 'center',
    justifyContent: 'center',
    paddingHorizontal:5,
    width: width * 0.8,
  },
  textArea: {
    height: height*0.15,
    textAlignVertical: 'top',
    // flex:1,
    color: 'rgba(0,0,0, 0.5)',
  }
});

export default TextInput;
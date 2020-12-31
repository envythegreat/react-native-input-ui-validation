import React,{useState} from 'react'
import { View, Text, TextInput as Input, Dimensions, StyleSheet } from 'react-native';
import {validate, ValidateColors} from './config'
import {Feather as Icon} from "@expo/vector-icons"
const {width,height} =  Dimensions.get('window')

interface TextInputProps{
  // we don't use icon name only when we are trying to use TextArea
  iconName?: string;
  placeholder: string;
  keyBoardType: "default" | "email-address" | "numeric" | "phone-pad" | "number-pad" | "decimal-pad" | "visible-password" | "ascii-capable" | "numbers-and-punctuation" | "url" | "name-phone-pad" | "twitter" | "web-search" | undefined;
  isPassword?: boolean;
  multiline?: boolean;
  numberofLines?: number;
  isMasked?: boolean;
  // maskFormat?: string;
  handleState: (value: String) => void;
  refs: string;
}

const TextInput: React.FC<TextInputProps> = (
  {
    iconName ,
    placeholder,
    keyBoardType,
    isPassword,
    multiline,
    numberofLines,
    isMasked,
    // maskFormat,
    handleState,
    refs
  }
) =>{

  const [inputValue, setInputValue] = useState('');
  const [checkOrX, setCheckOrX] = useState(null);
  const [isError, setIsError] = useState(null);

  async function handleChange(e: string){
    setInputValue(await e);
    let myInputValue = validate(e, refs)
    handleState(await e)
    //@ts-ignore
    setCheckOrX(myInputValue.isValid);
    //@ts-ignore
    setIsError(myInputValue.error);
  }

  const colors = checkOrX === null
  ? ValidateColors.Default
  : checkOrX
        ? ValidateColors.Valid
        : ValidateColors.Invalid

  return(
    <>
      <View style={[multiline ? styles.textAreaContainer : styles.container , {borderColor: colors}]}>
       {  !multiline
            ? (
              <View style={{padding: 5,paddingLeft: 13}}>
                <Icon name={iconName}  style={styles.iconSy} size={18} color={colors} />
              </View>
            )
            : null
      }
      {
        isMasked
          ?
            // <TextInputMask
            //   type={'custom'}
            //   options={{
            //     mask: maskFormat
            //   }}
            //   underlineColorAndroid="transparent"
            //   placeholder={placeholder}
            //   style={{flex:1,height:35,color: 'rgba(0,0,0, 0.5)'}}
            //   value={inputValue}
            //   onChangeText={(e) => handleChange(e)}
            //   keyboardType={keyBoardType}
            // />
            <Text>Hello</Text>
          : 
            <Input 
                underlineColorAndroid="transparent"
                placeholder={placeholder}
                style={multiline ? styles.textArea : {color: 'rgba(0,0,0, 0.5)',height:35,flex:1}}
                value={inputValue}
                onChangeText={(e) => handleChange(e)}
                keyboardType={keyBoardType}
                secureTextEntry={isPassword}
                {...{multiline}}
                numberOfLines={multiline ? numberofLines : 1}
              />
      }
      

      { !multiline
          ? checkOrX === null
              ? null
              : checkOrX ?
                (
                  <View style={{padding: 5,paddingHorizontal: 10}}>
                    <Icon name="check-circle"  style={styles.iconSy} size={18} color={colors} />
                  </View>
                ) : (
                  <View style={{padding: 5,paddingHorizontal: 10}}>
                    <Icon name="alert-circle"  style={styles.iconSy} size={18} color={colors} />
                  </View>
                )
          :null
        }
    </View>
    {isError ? <View style={styles.myerr}><Text style={styles.errorTxt}>{isError}</Text></View> : null}
    </>
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
  },
  iconSy:{}
});

export default TextInput;



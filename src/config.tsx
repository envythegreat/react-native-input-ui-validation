import {checkCreditCard} from './CreditCardValidation'
export const regex = {
  email: {
    regex: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    error: 'Please enter a valid email'
  },
  password: {
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    error: 'A min 8 characters password contains a combination of uppercase/lowercase/letter/number *.'
  },
  username: {
    regex: /^[a-z\d]{5,12}$/i,
    error: 'Must contain only lowercase alphabets/digits/ at least 5 char'
  },
  fullname: {
    regex: /^[a-zA-Z]+ [a-zA-Z]+$/,
    error: 'please enter a valid full name'
  },
  address: {
    regex: /^[a-zA-Z0-9\s,'-]*$/,
    error: 'enter a valid address'
  },
  birthday: {
    regex: /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/,
    error: 'Eligibility 18 years ONLY.',
    invalidFormat: 'Enter date in DD/MM/YYYY format ONLY.'
  },
  url:{
    regex: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
    error: 'Ivalid Url please do not forget to include www at the begining'
  },
  textArea: {
    regex: /^[a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\s]+$/,
    error: 'Please Check Your Text'
  },
  creditCard:[
    "Unknown card type",
    "No card number provided",
    "Credit card number is in invalid format",
    "Credit card number is invalid",
    "Credit card number has an inappropriate number of digits",
    "Warning! This credit card number is associated with a scam attempt",
  ]
}
export const ValidateColors = {
  Valid: '#2CB9B0',
  Invalid: '#FF0058',
  Default: '#8A8D90'
}
export function validate(data: string, ref: string) {
  switch(ref) {
    case 'Email':{
      if(regex.email.regex.test(data)){
        return {isValid: true, error: false}
      } else {
        return {isValid: false, error: regex.email.error}
      }
    }
    case 'Password':{
      if(regex.password.regex.test(data)){
        return {isValid: true, error: false}
      } else {
        return {isValid: false, error: regex.password.error}
      }
    }
    case 'Username':{
      if(regex.username.regex.test(data)){
        return {isValid: true, error: false}
      } else {
        return {isValid: false, error: regex.username.error}
      }
    }
    case 'FullName':{
      if(regex.fullname.regex.test(data)){
        return {isValid: true, error: false}
      } else {
        return {isValid: false, error: regex.fullname.error}
      }
    }
    case 'Address':{
      if(regex.address.regex.test(data)){
        return {isValid: true, error: false}
      } else {
        return {isValid: false, error: regex.address.error}
      }
    }
    case 'Birthday':{
      if(regex.birthday.regex.test(data)){
        let splitedDate = data.split("/")
        let myDate = new Date(splitedDate[1] + "/" + (splitedDate[0]) + "/" + splitedDate[2]);
        let dtCurrent = new Date()
        if (dtCurrent.getFullYear() - myDate.getFullYear() < 18) {
          console.log(myDate)
          return {isValid : false, error: regex.birthday.error};
        }
       return {isValid: true, error: false}
      } else {
        return {isValid: false, error: regex.birthday.invalidFormat}
      }
    }
    case 'Url':{
      if(regex.url.regex.test(data)){
        return {isValid: true, error: false}
      } else {
        return {isValid: false, error: regex.url.error}
      } 
    }  
    case 'TextArea':{
      if(regex.textArea.regex.test(data)){
        return {isValid: true, error: false}
      } else {
        return {isValid: false, error: regex.textArea.error}
      }
    }
    case 'CreditCard':{
      const myCard = checkCreditCard(data)
      //@ts-ignore
      return {isValid: myCard.validCard, error: regex.creditCard[myCard.errorNumber]}
    }
  }
  return true
}
// export function handleState(e, ref) {
//   return {e, ref}
// }
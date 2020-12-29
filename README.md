## this package is on process of building

# react-native-input-ui-validation

package to handle ui and validation for TextInput

## Installation

```sh
npm install react-native-input-ui-validation
```

## How to use

```js
import TextInput from "react-native-input-ui-validation";

// get the value of TextInput
const [result, setResult] = React.useState();
const getResult = (e: any) =>{
  setResult(e)
}
// simple how to use the component

// Email
<TextInput 
    iconName="mail"
    placeholder="Email"
    refs="Email"
    handleState={getResult}
    keyBoardType="email-address"
  />

// Password
<TextInput 
    iconName="lock"
    placeholder="Password"
    refs="Password"
    handleState={getResult}
    keyBoardType="default"
    isPassword
  />

//Birthday
<TextInput 
    iconName="calendar"
    placeholder="Birthday format(DD/MM/YYYY)"
    refs="Birthday"
    handleState={getResult}
    keyBoardType="default"
  />

// Credit Card
<TextInput 
    iconName="credit-card"
    placeholder="CreditCard"
    refs="CreditCard"
    handleState={getResult}
    keyBoardType="number-pad"
  />
```


## Options

| Prop Name | required/no | type | description |
| --- | --- | --- | --- |
| iconName | required | string | Please use only icons from  https://feathericons.com |
| placeholder | required | string | here to descrip the input is why for :) |
| keyBoardType | required | string | for the meantime it's required but we will change that |
| isPassword | not required | boolean | use this only if u want the input to be a password |
| multiline | not required | boolean | we use this if we want to creat a text area also we need to spicify the number of lines via numberofLines Props |
| handleState | required | function | this function to get the value of the input check example above |
| refs | required | string | we need this prop to give a info to validation script in order to validate data inside the input |

## accepted inputs types
the refs props accept only the following types for the meantime we may add more : 

- refs : '"Email" | "Password" | "Username" | "FullName" | "Address" | "Birthday" | "Url" | "TextArea" | "CreditCard"'



## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## TextInput Props

## License

MIT

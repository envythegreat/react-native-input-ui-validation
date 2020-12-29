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

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## TextInput Props

## License

MIT

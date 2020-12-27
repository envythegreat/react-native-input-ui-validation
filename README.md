# react-native-input-ui-validation

package to handle ui and validation for TextInput

## Installation

```sh
npm install react-native-input-ui-validation
```

## Usage

```js
import TextInput from "react-native-input-ui-validation";

// get the value of TextInput
const [result, setResult] = React.useState();
const getResult = (e: any) =>{
  setResult(e)
}
// simple how to use the component

<TextInput 
    iconName="mail"
    placeholder="Email"
    refs="Email"
    handleState={getResult}
    keyBoardType="email-address"
  />
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## TextInput Props

## License

MIT

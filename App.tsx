import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  VirtualizedList,
} from 'react-native';
import CustomLable from './scr/components/CustomLable';
import MyComponent from './scr/components/MyComponent';
import Login from './scr/components/Login';
import SampleLogin from './scr/components/SampleLogin';
import Signup from './scr/components/Signup';
import Appnavigation from './scr/Navigations/Appnavigation';
import {DefaultTheme, PaperProvider} from 'react-native-paper';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'orange',
    secondary: 'yellow',
  },
};

function App(): React.JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <Appnavigation />
    </PaperProvider>
  );
}

const sty = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;

// video 14

{
  /* <View style={{alignItems: 'center'}}>
      <Text>hello</Text>
      <TextInput
        style={{
          backgroundColor: 'black',
          color: 'white',
          width: 300,
        }}
        placeholder="User Name"
        placeholderTextColor={'#ddd'}
      />
    </View> */
}

//Video 13

// function App(): React.JSX.Element {
//   console.log('Main App is Rendered');
//   const [count, setCount] = useState(0);

//   function changeCount() {
//     setCount(count + 1);
//   }

//   return (
//     <View style={{ alignItems: 'center' }}>
//       <Button title='Click Me' onPress={changeCount} />
//     </View>
//   );
// };

// function Component1() {
//   console.log('Component 1 is Rendered');
//   return <Text style={{ fontSize: 30 ,color:'#000'}}>Component 1</Text>;
// };

// function Component2() {
//   console.log('Component 2 is Rendered');
//   return <Text style={{ fontSize: 30,color:'#000'}}>Component 2</Text>;
// };

//video 11
// function App(): React.JSX.Element {
//   return (
//     <View style={{alignItems: 'center'}}>
//       <TextInput
//         style={{
//           backgroundColor: '#aaa',
//           color: '#000',
//           width: 300,
//           marginTop: 50,
//           borderRadius:40,
//           paddingLeft:20,

//         }}
//         placeholder='User Name'
//         placeholderTextColor={'#ddd'}
//       />
//       <TextInput
//         style={{
//           backgroundColor: '#aaa',
//           color: '#000',
//           width: 300,
//           marginTop: 50,
//           borderRadius:40,
//           paddingLeft:20,

//         }}
//         secureTextEntry={true}
//         placeholder='Password'
//         placeholderTextColor={'#ddd'}
//       />
//     </View>
//   );
// }

// video 10

//   function click(value:any){
//     console.log(value);
//   }
//   return (
//     <View style={{alignItems: 'center'}}>
//      <Button title='Click Me' onPress={()=>{
//       click('react  native');
//      }}/>

//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   return (
//     <View style={{alignItems: 'center'}}>
//       <CustomLable>Welcome</CustomLable>
//       <CustomText fsize={60} a={'Hello'} b={'world'} />
//     </View>
//   );
// }

// type CustomTextProps = {
//   fsize?:number;
//   a:string;
//   b:string;
// }

// function CustomText(props: CustomTextProps) {
//   return (
//     <Text style={{fontSize: props.fsize}}>
//       {props.a} {props.b}
//     </Text>
//   );
// }

// export default App;

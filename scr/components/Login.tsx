import {
  View,
  Text,
  StyleSheet,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Icon} from '@rneui/base';
import {TouchableOpacity} from 'react-native';
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../Firebase/firebaseinit'
import { ActivityIndicator } from 'react-native-paper';

const Login = ({navigation}: any) => {
  const navi = navigation;

  function login() {}
  return (
    <View style={sty.container}>
      <Image
        style={{width: '100%', height: '100%', position: 'absolute'}}
        source={require('../image/bgImage.png')}
        resizeMode="cover"
      />

      <Text
        style={{
          fontSize: 45,
          color: 'white',
          fontWeight: '600',
          marginTop: 80,
          textAlign:'center',
          fontFamily:'Lobster-Regular'
        }}
        >
        {'Tum\'s Pizza'}
      </Text>

      <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
        <LoginField stack={navi} />
      </KeyboardAwareScrollView>
    </View>
  );
};

const sty = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});

export default Login;

const LoginField = (props: any) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const nav = props.stack;
  return (
    <View style={{marginTop: 180}}>
      <View
        style={{
          backgroundColor: 'rgba(255,255,255,0.8)',
          borderRadius: 20,
          height: 70,
          marginHorizontal: 30,
          justifyContent: 'center',
          paddingLeft: 20,
        }}>
        <TextInput
          placeholder="Your Email"
          placeholderTextColor={'#999'}
          style={{
            fontSize: 20,
            color: '#000',
          }}
          onChangeText={text => {
            setUserEmail(text);
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: 'rgba(255,255,255,0.8)',
          borderRadius: 20,
          height: 70,
          marginHorizontal: 30,
          justifyContent: 'center',
          paddingLeft: 20,
          marginTop: 10,
        }}>
        <TextInput
          placeholder="Password"
          placeholderTextColor={'#999'}
          secureTextEntry={true}
          style={{
            fontSize: 20,
            color: '#000',
          }}
          onChangeText={text => {
            setUserPassword(text);
          }}
        />
      </View>
      <SignInButton sta={nav} u_email={userEmail} u_password={userPassword} />
      <BottomSection sta={nav} />
    </View>
  );
};

// export default LoginField

const SignInButton = (props: any) => {

  const [isLoading,setIsLoading] = useState(false);

  const u_email = props.u_email;
  const u_pass = props.u_password;
  const stack = props.sta;
  

  const getUser = async () => {
    setIsLoading(true);
    try {
      const querySnapshot = await getDocs(query(collection(db, 'user'), where('Email', '==', u_email.toLocaleLowerCase())));
      setIsLoading(false);
      if (!querySnapshot.empty) {
        const user = querySnapshot.docs[0].data();
        if (user.Password === u_pass) {
          console.log('User Logged In');
          stack.navigate('Home');
          
          
        } else {
          Alert.alert('Message','incorrect user name or password');
  
        }
      } else {
        Alert.alert('Warning','Can\'t find the User');
      }
    } catch (error) {
      setIsLoading(false);
      console.error('Error fetching user:', error);
    }
  };
  
  

  return (
    <View style={{flexDirection: 'row', marginTop: 20}}>
      <View
        style={{
          height: 100,
          flex: 1,

          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 25,
            color:'#fff',
            marginLeft: 40,
            fontWeight: '900',
          }}>
          Sign In
        </Text>
      </View>
      <View
        style={{
          height: 100,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <TouchableOpacity activeOpacity={0.7} onPress={getUser}>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: '#ff3400',
              marginRight: 40,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>


              {(isLoading)? <ActivityIndicator color='white'/>:<Icon
              name={'arrow-forward'}
              type="ionicon"
              color={'white'}
              size={30}></Icon>}
            
             
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// export default SignInButton;

const BottomSection = (props: any) => {
  const navigation = props.sta;
  function gotoSingUp() {
    navigation.navigate('Signup');
  }
  return (
    <View style={{flexDirection: 'row', marginTop: 20}}>
      <View
        style={{
          height: 100,
          flex: 1,
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={gotoSingUp}>
          <View
            style={{
              height: 5,
              
              width: 55,
              marginLeft: 40,
              position: 'absolute',
              bottom: 0,
            }}></View>
          <Text
            style={{
              fontSize: 16,
              color:'white',
              marginLeft: 40,
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 100,
          flex: 1,
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <TouchableOpacity>
          <View
            style={{
              height: 5,
              
              width: 120,
              right: 40,
              position: 'absolute',
              bottom: 0,
            }}></View>
          <Text
            style={{
              fontSize: 16,
              color:'white',
              marginRight: 40,
            }}>
            Forget Password
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// export default BottomSection;

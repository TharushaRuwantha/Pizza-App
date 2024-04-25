import {
  View,
  Text,
  StyleSheet,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Icon} from '@rneui/base';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Signup = ({navigation}: any) => {
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
          marginLeft: 20,
          textAlign: 'center',
        }}>
        {'Create Account'}
      </Text>

      <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
        <LoginField navi={navi}/>
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

export default Signup;

const LoginField = (props:any) => {
 const stack = props.navi;
  return (
    <View style={{marginTop: 120}}>
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
          placeholder="Name"
          placeholderTextColor={'#999'}
          style={{
            fontSize: 20,
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: 'rgba(255,255,255,0.8)',
          borderRadius: 20,
          height: 70,
          marginHorizontal: 30,
          marginTop: 10,
          justifyContent: 'center',
          paddingLeft: 20,
        }}>
        <TextInput
          placeholder="Your Email"
          placeholderTextColor={'#999'}
          style={{
            fontSize: 20,
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
          style={{
            fontSize: 20,
          }}
        />
      </View>
      <SignUpButton />
      <BottomSection stack={stack} />
    </View>
  );
};

// export default LoginField

const SignUpButton = () => {
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
            color: '#fff',
            marginLeft: 40,
            fontWeight: '900',
          }}>
          Sign Up{' '}
        </Text>
      </View>
      <View
        style={{
          height: 100,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: '#ff3300',
            marginRight: 40,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name={'arrow-forward'}
            type="ionicon"
            color={'white'}
            size={30}></Icon>
        </View>
      </View>
    </View>
  );
};

// export default SignInButton;

const BottomSection = (props: any) => {
    const sta = props.stack;
  return (
    <View style={{flexDirection: 'row', marginTop: 20}}>
      <View
        style={{
          height: 100,
          flex: 1,
          justifyContent: 'center',
        }}></View>
      <View
        style={{
          height: 100,
          flex: 1,
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={() => {
            sta.goBack();
        }}>
          <View
            style={{
              height: 5,
              width: 50,
              right: 40,
              position: 'absolute',
              bottom: 40,
            }}></View>
          <Text
            style={{
              fontSize: 16,
              color: '#fff',
              marginRight: 40,
            }}>
            SignUp
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// export default BottomSection;

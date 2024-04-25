import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Button } from '@rneui/base'
import { set } from 'firebase/database'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../Firebase/firebaseinit'


const SampleLogin = ({navigation}:any) => {

const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const getUser = async () => {
  try {
    const querySnapshot = await getDocs(query(collection(db, 'user'), where('Email', '==', email.toLocaleLowerCase())));
    if (!querySnapshot.empty) {
      const user = querySnapshot.docs[0].data();
      if (user.Password === password) {
        console.log('User Logged In');
        navigation.navigate('Details')
        
      } else {
        console.log('Incorrect password');
      }
    } else {
      console.log('User not found');
    }
  } catch (error) {
    console.error('Error fetching user:', error);
  }
};


  return (
    <View>
      <TextInput
        style={{
          backgroundColor: '#aaa',
          color: '#000',
          width: 300,
          marginTop: 50,
          borderRadius: 40,
          paddingLeft: 20,
        }}
        onChangeText={(text) => {
            setEmail(text);
            }}
        placeholder='User Name'
        placeholderTextColor={'#ddd'}/>
        <TextInput
        style={{
          backgroundColor: '#aaa',
          color: '#000',
          width: 300,
          marginTop: 50,
          borderRadius: 40,
          paddingLeft: 20,

        }}
        placeholder='Password'
        placeholderTextColor={'#ddd'}
        onChangeText={(text) => {
            setPassword(text);
        }}
        />
    <Button title='Click Me' onPress={getUser}/>
    </View>
  )
}

export default SampleLogin;
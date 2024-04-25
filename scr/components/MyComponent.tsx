import { View, Text, Button } from 'react-native'
import React from 'react'

const MyComponent = ({navigation}:any) => {
  return (
    <View>
      <Text style={{fontSize: 40}}>Hello</Text>
      <Text style={{fontSize: 30, color: '#983029'}}>
        React Native
      </Text>
      
      <Button title='Click Me' onPress={() => navigation.navigate('Details')}/>
    </View>
  )
}

export default MyComponent
import *as React from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default class DailyPicScreen extends React.Component{
render(){
    return(
        <View style= {{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'white',
            alignItems:'center',
        }}>
            <Text> Daily Pictures (Currently not available 😓😓) </Text>
        </View>
    )
}
}
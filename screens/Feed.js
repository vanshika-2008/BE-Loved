import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class FeedScreen extends React.Component{
render(){
    return(
        <View style = {styles.container}>
            <Text>Feed</Text>
        </View>
    )
}
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    }
})
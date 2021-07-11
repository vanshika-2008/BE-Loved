import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class ArticleScreen extends React.Component{
render(){
    return(
        <View style = {styles.container}>
            <Text>See different Articles(Article Screen)</Text>
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
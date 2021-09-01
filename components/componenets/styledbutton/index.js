import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../styles';

const styledbutton = (props)=>{

    const type = props.type;
    const content = props.content;
    const onPress = props.onPress;
    const backgorundColor = type == primary ? 'black' : 'white';
    const textColor = type == primary ? 'white' : 'black';
    return(
        <View style={styles.container}>
            <Pressable
                style={styles.button, {backgroundolor}}
                onPress={() => onPress()

                }
            >
            <Text style={styles.text, {color: textColor}}>{content}</Text>
            </Pressable>
        </View>
    );
};

export default styledbutton;
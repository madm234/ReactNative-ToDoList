import React,{useState} from 'react';
import {StyleSheet,Text,View,TextInput} from 'react-native'

export default function Input({addNew}){
    const[name,chngName] =useState('');

    return(
    <View style={styles.inpView}>
        <TextInput onChangeText={(val)=>chngName(val)} style={styles.txtinp} placeholder='Add Activity' />
        <Text onPress={()=>addNew(name)} style={styles.addbtn}>Add+</Text>
    </View>
    )
}

const styles =StyleSheet.create({
    txtinp : {
        borderBottomWidth: 1,
        borderStyle: 'solid',
        paddingVertical: 5,
    },
    inpView:{
        marginHorizontal: 30,
        marginVertical: 40
        // display: 'flex',
        // alignItems: 'center'
    },
    addbtn: {
        marginTop: 20,
        backgroundColor: '#E25E3E',
        textAlign: 'center',
        color: 'white',
        padding: 13,
        borderRadius: 5,
        fontWeight: '600',
        fontSize: 15
    }
})
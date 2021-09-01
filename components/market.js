import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, ScrollView} from 'react-native';
import { SafeAreaView } from "react-native";

export function Market() {
  return (
    <SafeAreaView style={styles.container}>

      <ScrollView>
        <Text style={styles.headingStyle}>Market</Text>
        {/* <StatusBar style="auto" /> */}
        <View style={styles.cardStyle}>
        </View>
        <View style={styles.cardStyle}>
        </View>
        <View style={styles.cardStyle}>
        </View>
        <View style={styles.cardStyle}>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000F16',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headingStyle: {
    fontSize: 25,
    color:'#02B9C0',
    padding:32,
    fontWeight:'bold'
  },
  cardStyle:{
    backgroundColor:'#001C23',
    marginLeft:32,
    height:100,
    width:350,
    borderRadius:7,
    marginBottom:30
  },
});
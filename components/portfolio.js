import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, ScrollView} from 'react-native';
import { SafeAreaView } from "react-native";

export function Portfolio() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headingStyle}>Portfolio</Text>

        {/* Current Value */}
        <View style={styles.cardStyle}>
          <Text style={styles.cardFont}>Current Value</Text>
        </View>

        {/* Invested Value */}
        <View style={styles.cardStyle}>
          <Text style={styles.cardFont}>Invested Value</Text>
        </View>

        {/* Profit/Loss */}
        <View style={styles.circularCard}>
          <Text style={styles.circularCardFont}>Profit/Loss</Text>
        </View>

        {/* Top Gainer,Top Loser */}
        <View style={styles.cardStyle}>
          <Text style={styles.cardFont}>Top Gainer</Text>
        </View>

        <View style={styles.cardStyle}>
          <Text style={styles.cardFont}>Top Loser</Text>
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
    height:120,
    width:350,
    borderRadius:7,
    marginBottom:30
  },
  cardFont:{
    marginTop:29,width:80,marginLeft:50,
    color:'#EFEFEF',
    fontSize: 18,
    textAlign:'center',fontWeight:"700",
  },
  circularCard:{
    backgroundColor:'#001C23',
    marginBottom:30,height:150,width:150,
    borderRadius:75,
    alignSelf:'center'
  },
  circularCardFont:{
    // marginTop:29,width:80,marginLeft:50,
    color:'#EFEFEF',
    fontSize: 18,
    textAlign:'center',fontWeight:"700",
    marginTop:40,
  }
});
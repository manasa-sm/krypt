import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, ScrollView,Image} from 'react-native';
import { SafeAreaView } from "react-native";

export function Portfolio() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headingStyle}>Portfolio</Text>

        {/* Current Value */}
        <View style={[styles.cardStyle, {flexDirection:'row', flexWrap:'wrap'}]}>
          <Text style={styles.cardFont}>Current Value</Text>
          <Text style={[styles.cardFont,{color:'#02B9C0', marginTop:40,marginLeft:85 }]}>$75000</Text>
        </View>

        {/* Invested Value */}
        <View style={[styles.cardStyle, {flexDirection:'row', flexWrap:'wrap'}]}>
          <Text style={styles.cardFont}>Invested Value</Text>
          <Text style={[styles.cardFont,{color:'#02B9C0', marginTop:40,marginLeft:85 }]}>$100000</Text>
        </View>

        {/* Profit/Loss */}
        <View style={styles.circularCard}>
          <Text style={styles.circularCardFont}>Loss</Text>
          <Text style={[styles.cardFont,{color:'#02B9C0', marginLeft:40,marginTop:10}]}>25%</Text>
        </View>

        {/* Top Gainer,Top Loser */}
        <View style={[styles.cardStyle, {flexDirection:'row', flexWrap:'wrap'}]}>
          <Text style={styles.cardFont}>Top Gainer</Text>
          <Image 
            source={{uri: 'https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/63e240f3047f41c791796784bc719f63.png' }}
            style={{width: 40, height: 40, margin:31}} />
          <Text style={{color:'#02B9C0',fontSize: 18,
    textAlign:'center',fontWeight:"700",marginTop:40,marginLeft:30}}>5%</Text>
        </View>

        <View style={[styles.cardStyle, {flexDirection:'row', flexWrap:'wrap'}]}>
          <Text style={styles.cardFont}>Top Loser</Text>
          <Image 
            source={{uri: 'https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/5a8e66d1f2f043fe960f0d81df2dc198.png' }}
            style={{width: 40, height: 40, margin:31}} />
          <Text style={{color:'#02B9C0',fontSize: 18,
    textAlign:'center',fontWeight:"700",marginTop:40,marginLeft:30}}>12%</Text>
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
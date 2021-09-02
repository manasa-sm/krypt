import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, ScrollView, SafeAreaView, Image, FlatList} from 'react-native';

export function Assets() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headingStyle}>My Assets</Text>
        
        <View style={[styles.cardStyle, {flexDirection:'row', flexWrap:'wrap'}]}>
          <Image 
            source={{uri: 'https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/63e240f3047f41c791796784bc719f63.png' }}
            style={{width: 40, height: 40, margin:31}} />
          <Text style={styles.cardFont}>Dogecoin</Text>
          <Text style={{color:'#02B9C0',fontSize: 18, textAlign:'center',fontWeight:"700",marginTop:40,marginLeft:10}}>
          5%🔻     $112          
          </Text>
        </View>

        <View style={[styles.cardStyle, {flexDirection:'row', flexWrap:'wrap'}]}>
          <Image 
            source={{uri: 'https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/ebd3726585004a99926148fbc0689529.png' }}
            style={{width: 40, height: 40, margin:31}} />
          <Text style={styles.cardFont}>TorFX</Text>
          <Text style={{color:'#02B9C0',fontSize: 18, textAlign:'center',fontWeight:"700",marginTop:40,marginLeft:10}}>
          1.2%     $3210          
          </Text>
        </View>

        <View style={[styles.cardStyle, {flexDirection:'row', flexWrap:'wrap'}]}>
          <Image 
            source={{uri: 'https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/ba90bcb0cafb4801ac5dd310f47d6411.png' }}
            style={{width: 40, height: 40, margin:31}} />
          <Text style={styles.cardFont}>Ripple</Text>
          <Text style={{color:'#02B9C0',fontSize: 18, textAlign:'center',fontWeight:"700",marginTop:40,marginLeft:10}}>
          0.7%     $497          
          </Text>
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
    height:100,
    width:350,
    borderRadius:7,
    marginBottom:20
  },
  cardFont:{
    marginTop:41,width:100,
    color:'#EFEFEF',
    fontSize: 18,
    textAlign:'center',fontWeight:"700",
  },
});
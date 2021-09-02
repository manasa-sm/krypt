import * as React from 'react';
import { Component } from 'react';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, ScrollView, SafeAreaView, Image, FlatList} from 'react-native';


export function Market() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://rest.coinapi.io/v1/assets/icons/50',{
      method:'GET',
      headers:{'X-CoinAPI-Key':'308F4A45-D20E-4237-AB87-69A64F29AC95'}
    })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  var RandomNumber = Math.floor(Math.random() * 10000) + 100 ;

  const Item = ({ url, asset_id}) => (  
  <View style={[styles.cardStyle, {flexDirection:'row', flexWrap:'wrap'}]}>
    <Image 
      source={{uri: url }}
      style={{width: 40, height: 40, margin:31}} />
    <Text style={{ fontSize: 18, color: 'white', marginTop:39,fontWeight:"700"}}>{asset_id}</Text>
  <Text style={{ fontSize: 18, color: 'white', marginLeft:39,fontWeight:"700"}}>{RandomNumber}</Text>
  </View>
);

  const renderItem = ({ item }) => (
    <Item url={item.url} asset_id={item.asset_id}/>
  );

  return (
    <SafeAreaView style={styles.container}>

        <Text style={styles.headingStyle}>Market</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.url}
        />
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
    marginBottom:20
  },
}); 
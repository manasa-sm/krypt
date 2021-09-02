import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, ScrollView, SafeAreaView, FlatList} from 'react-native';
import { useEffect, useState } from 'react';

export function Market() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    console.log(data);

    useEffect(() => {
      fetch('https://rest.coinapi.io//v1/assets/icons/{20}',{
        method:'GET',
        headers:{'X-CoinAPI-Key':'308F4A45-D20E-4237-AB87-69A64F29AC95'}
      })
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    const Item = ({ asset_id }) => (
      <View style={styles.cardStyle}>
        <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{asset_id}</Text>
      </View>
    );

    const renderItem = ({ item }) => (
      <Item asset_id={item.asset_id} />
    );

  return (
    <SafeAreaView style={styles.container}>

      {/* <ScrollView> */}
        <Text style={styles.headingStyle}>Market</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.asset_id}
        />

        <View style={styles.cardStyle}>
        </View>
      {/* </ScrollView> */}

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
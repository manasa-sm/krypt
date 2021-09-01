import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import styledbutton from './components/styledbutton';

const App = (props) => {
  return (
    <Imagelogo />
  )
}
export default function App() {
  return (
    <View style={styles.baackgroundContainer}>
      <ImageBackground 
      source={require('./assets/image1.png')}
      style={styles.image}>
      <View style={styles.backgroundContainer}>
        <View style={styles.titles}>
        </View>
      </View>
      </ImageBackground>    
    </View>

      <styledbutton type="primary" 
      content={"Login"} 
      onPress={() => {}}/>

      <styledbutton type="secondary" 
      content={"Sign Up"} 
      onPress={() => {}}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backgroundContainer: {
    width: '100%',
    height: '100%',
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  }

});

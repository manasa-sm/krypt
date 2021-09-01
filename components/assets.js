import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Assets() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000F16' }}>
      <Text style={{color:'#fff'}}>Assets</Text>
    </View>
  );
}

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Image
//         style={{}}
//         source={require('./assets/icon.png')}
//       /> */}
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000F16',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
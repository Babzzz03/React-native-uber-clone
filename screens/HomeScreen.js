import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => { 
  return (
    <SafeAreaView style={[ tw`bg-white h-full` ,styles.container]}>
      <View style={tw`p-5`}>
        <Image
        style={{
           width: 100, height: 100, resizeMode: 'contain',
        }}
        source={{
            
            uri: 'http://links.papareact.com/gzs',
        }}
        />
        <NavOptions/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop:StatusBar.currentHeight
    },
});
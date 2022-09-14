import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { faMedal } from '@fortawesome/free-solid-svg-icons/faMedal';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons/faDumbbell';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar';
import Footer from './components/Footer';
import Header from './components/Header';
import Icono from './components/Icono';

const App = () => {
  return (
    <SafeAreaView style={styles.contenedor}>
      <Header/>
      <View style={styles.flex}>
        <Icono icono={faMedal} texto="Awards & Goals" />
        <Icono icono={faDumbbell} texto="My Workouts" />
        <Icono icono={faUser} texto="My Profile" />
        <Icono icono={faCalendar} texto="Workout Programs" />
      </View>
      <Footer texto="www.4fitclub.com"/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#fff'
  }
});

export default App;

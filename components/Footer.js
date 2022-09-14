import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = ( {texto} ) => (
    <View style={styles.footer}>
        <Text style={styles.texto}>{texto}</Text>
    </View>
);

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        padding: 15,
        backgroundColor: '#f2f2f2'
    },
    texto: {
        color: '#fb8500',
        fontSize: 20,
        textAlign: 'center'
    }
});

export default Footer;

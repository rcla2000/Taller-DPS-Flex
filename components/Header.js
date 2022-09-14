import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = () => (
    <View style={styles.header}>
        <Text style={styles.texto1}>4</Text>
        <View style={styles.contenedor}>
            <Text style={styles.texto2}>Fit</Text>
            <Text style={styles.texto3}>Club</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fb8500',
        padding: 15,
        paddingBottom: 6
    },
    texto1: {
        color: '#fff',
        fontSize: 45,
    },
    texto2: {
        color: '#fff',
        fontSize: 13,
    },
    texto3: {
        color: '#fff',
        fontSize: 17,
    },
    contenedor: {
        justifyContent: 'center'
    }
});

export default Header;
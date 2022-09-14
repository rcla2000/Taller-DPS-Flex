import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Icono = ( {icono, texto} ) => (
    <View style={styles.contenedor}>
        <View style={styles.contenedorIcono}>
            <FontAwesomeIcon icon={ icono } style={styles.icono} size={60} />
        </View>
        <Text style={styles.texto}>{texto}</Text>
    </View>
);

const styles = StyleSheet.create({
    contenedor: {
        width: 120,
        height: 180,
        alignItems: 'center',
        margin: 30
    },
    texto: {
        color: '#fb8500',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 10
    },
    contenedorIcono: {
        width: 120,
        height: 120,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#fb8500',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icono: {
        color: '#fb8500'
    }
});

export default Icono;
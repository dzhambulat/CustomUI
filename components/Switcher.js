import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 150,
        borderRadius: '50%',
        backgroundColor: '#ebe5ea',
    },
    topShadow: {
        borderRadius: '50%',

        shadowColor: "#c8c3c7",
        shadowOffset: {
            width: "15px",
            height: "15px"
        },
        shadowRadius: "44px"
    },
    bottomShadow: {
        borderRadius: '50%',

        shadowColor: "#ffffff",
        shadowOffset: {
            width: "-15px",
            height: "-15px"
        },
        shadowRadius: "44px"
    }
});

export default function Switcher() {
    return (

        <TouchableOpacity style={styles.topShadow}>
            <View style={styles.bottomShadow}>
                <View style={styles.container}>

                </View>
            </View>
        </TouchableOpacity >

    );
}
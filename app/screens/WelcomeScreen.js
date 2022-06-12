import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, ImageBackground, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';

//components
import Screen from '../components/Screen';

//config
import Colors from '../config/Colors';

function WelcomeScreen(props) {

    return (
        <Screen style={styles.screen}>
            <Image source={require('../../assets/images/logo.png')} style={{ marginTop: RFPercentage(6), width: RFPercentage(30), height: RFPercentage(12) }} />
            <LinearGradient colors={['#38EF7D', '#11998E']} start={[1, 1]} end={[0.5, 0.1]} style={{ position: 'absolute', bottom: 0, borderTopLeftRadius: RFPercentage(4), borderTopRightRadius: RFPercentage(4), alignSelf: 'center', alignItems: "center", flexDirection: 'row', justifyContent: 'center', width: '100%', height: RFPercentage(70) }} >

            </LinearGradient>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: Colors.white
    },
    linearGradient: {

    }
})

export default WelcomeScreen;
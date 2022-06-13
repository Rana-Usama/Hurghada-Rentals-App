import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';

//components
import Screen from '../components/Screen';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function SigninScreen(props) {

    return (
        <Screen style={styles.screen}>
            <Image source={require('../../assets/images/logo2.png')} style={styles.logo} />
            <LinearGradient colors={['#38EF7D', '#11998E']} start={[1, 1]} end={[0.5, 0.1]} style={styles.linearGradient} >
                <Text style={{ marginTop: RFPercentage(8), color: Colors.white, fontSize: RFPercentage(3.2), fontFamily: 'Montserrat_700Bold' }} >
                    Hello Again!
                </Text>
                <View style={{ marginTop: RFPercentage(2.7), width: '90%', justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(2.2), fontFamily: 'Montserrat_400Regular' }} >
                        Welcome back you've been
                    </Text>
                    <Text style={{ marginTop: RFPercentage(0.7), color: Colors.white, fontSize: RFPercentage(2.2), fontFamily: 'Montserrat_400Regular' }} >
                        missed!
                    </Text>
                </View>
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
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: RFPercentage(4),
        borderTopRightRadius: RFPercentage(4),
        alignSelf: 'center',
        alignItems: "center",
        justifyContent: 'flex-start',
        width: '100%',
        height: RFPercentage(77)
    },
    logo: {
        marginTop: RFPercentage(8),
        width: RFPercentage(24),
        height: RFPercentage(9)
    }
})

export default SigninScreen;
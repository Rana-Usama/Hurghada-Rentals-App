import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';

//components
import Screen from '../components/Screen';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function WelcomeScreen(props) {

    return (
        <Screen style={styles.screen}>
            <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
            <LinearGradient colors={['#38EF7D', '#11998E']} start={[1, 1]} end={[0.5, 0.1]} style={styles.linearGradient} >
                <Text style={{ marginTop: RFPercentage(20), color: Colors.white, fontSize: RFPercentage(3.1), fontFamily: 'Montserrat_700Bold' }} >
                    YOUR DREAM SPACE
                </Text>
                <View style={{ marginTop: RFPercentage(2.7), width: '90%', justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(2), fontFamily: 'Montserrat_400Regular' }} >
                        Find your dream space
                    </Text>
                    <Text style={{ marginTop: RFPercentage(0.7), color: Colors.white, fontSize: RFPercentage(2), fontFamily: 'Montserrat_400Regular' }} >
                        with just few clicks.
                    </Text>
                </View>

                {/* Button */}
                <View style={{ width: "100%", alignItems: "center", position: 'absolute', bottom: RFPercentage(12) }}>
                    <MyAppButton
                        title="Explore"
                        padding={RFPercentage(2)}
                        onPress={() => props.navigation.navigate("SigninScreen")}
                        backgroundColor={Colors.white}
                        color={Colors.black}
                        bold={false}
                        fontFamily={'Montserrat_600SemiBold'}
                        borderRadius={RFPercentage(1.5)}
                        width={"34%"}
                    />
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
        height: RFPercentage(70)
    },
    logo: {
        marginTop: RFPercentage(6),
        width: RFPercentage(40),
        height: RFPercentage(15)
    }
})

export default WelcomeScreen;
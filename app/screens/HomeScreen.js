import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';

//config
import Colors from '../config/Colors';

function HomeScreen(props) {

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Search",
            value: "",
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    return (
        <Screen style={styles.screen}>
            <Text style={{ marginTop: RFPercentage(4), color: Colors.primary, fontSize: RFPercentage(2.6), fontFamily: 'Montserrat_700Bold' }} >
                Home
            </Text>

            <View style={{ marginTop: RFPercentage(5), width: '90%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center' }} >
                <Text style={{ fontSize: RFPercentage(3.6), color: Colors.black, fontFamily: 'Montserrat_600SemiBold' }} >
                    Find your
                </Text>
                <Text style={{ marginTop: RFPercentage(0.6), fontSize: RFPercentage(3.6), color: Colors.black, fontFamily: 'Montserrat_600SemiBold' }} >
                    Rental Space
                </Text>
            </View>

            {/* Input field */}
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                {inputField.map((item, i) => (
                    <View key={i} style={{ marginTop: RFPercentage(3) }} >
                        <InputField
                            placeholder={item.placeholder}
                            placeholderColor={'#1115146E'}
                            leftIconName={'search'}
                            height={RFPercentage(7.2)}
                            backgroundColor={Colors.white}
                            borderWidth={RFPercentage(0.2)}
                            borderColor={'#FAFAFA'}
                            secure={item.secure}
                            borderRadius={RFPercentage(2.5)}
                            color={Colors.black}
                            fontSize={RFPercentage(2)}
                            handleFeild={(text) => handleChange(text, i)}
                            value={item.value}
                            width={"98%"}
                        />
                    </View>
                ))}
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: '#F4FFF8'
    }
})


export default HomeScreen;
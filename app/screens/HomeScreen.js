import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

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

    const categories = [
        {
            title: 'All'
        },
        {
            title: 'Apartment'
        },
        {
            title: 'House'
        },
        {
            title: 'Rentals'
        }
    ]

    return (
        <Screen style={styles.screen}>
            <Text style={{ marginTop: RFPercentage(4), color: Colors.primary, fontSize: RFPercentage(2.6), fontFamily: 'Montserrat_700Bold' }} >
                Home
            </Text>

            <View style={{ marginTop: RFPercentage(3), width: '90%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center' }} >
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

            {/* Category */}
            <View style={{ marginTop: RFPercentage(3), width: '90%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center' }} >
                <Text style={{ fontSize: RFPercentage(3), color: Colors.black, fontFamily: 'Montserrat_400Regular' }} >
                    Category
                </Text>
            </View>

            <View style={{ marginTop: RFPercentage(2.9), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flex: 1, width: '100%', }} >
                    {categories.map((item, i) => (
                        <TouchableOpacity activeOpacity={0.8} key={i} style={{ marginLeft: RFPercentage(2), borderColor: Colors.primary, borderWidth: RFPercentage(0.1), justifyContent: 'center', alignItems: 'center', width: RFPercentage(14), height: RFPercentage(4.5), borderRadius: RFPercentage(1.2) }} >
                            <Text style={{ color: Colors.black, fontFamily: 'Montserrat_400Regular', fontSize: RFPercentage(2.1) }} >
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <View style={{ marginTop: RFPercentage(3.4), width: '90%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center' }} >
                <Text style={{ fontSize: RFPercentage(3), color: Colors.black, fontFamily: 'Montserrat_400Regular' }} >
                    Recomended
                </Text>
            </View>

            <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', bottom: RFPercentage(3), right: RFPercentage(3) }} >
                <LinearGradient colors={['#38EF7D', '#11998E']} start={[1, 1]} end={[0.5, 0.1]} style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(9.8), height: RFPercentage(9.8), borderRadius: RFPercentage(30) }} >
                    <Feather name="plus" style={{ fontSize: RFPercentage(5.4) }} color={Colors.white} />
                </LinearGradient>
            </TouchableOpacity>
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
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

    const propertiesCartData = [
        {
            imageSource: require('../../assets/images/c1.png'),
            propName: 'Vacation Mension',
            price: '$1500',
            period: '/month',
            noOfBeds: '2 Beds',
            noOfBaths: '2 Baths',
            area: '2490 sqft'
        },
        {
            imageSource: require('../../assets/images/c2.png'),
            propName: 'White Painted House',
            price: '$800',
            period: '/month',
            noOfBeds: '6 Beds',
            noOfBaths: '7 Baths',
            area: '5436 sqft'
        },
    ]

    return (
        <Screen style={styles.screen}>
            <Text style={{ marginTop: RFPercentage(3), color: Colors.primary, fontSize: RFPercentage(2.6), fontFamily: 'Montserrat_700Bold' }} >
                Home
            </Text>

            <View style={{ marginTop: RFPercentage(2), width: '90%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center' }} >
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
                    <View key={i} style={{ marginTop: RFPercentage(2) }} >
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
            <View style={{ marginTop: RFPercentage(1.2), width: '90%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center' }} >
                <Text style={{ fontSize: RFPercentage(3), color: Colors.black, fontFamily: 'Montserrat_400Regular' }} >
                    Category
                </Text>
            </View>
            <View style={{ marginTop: RFPercentage(2.5), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flex: 1, width: '100%' }} >
                    {categories.map((item, i) => (
                        <TouchableOpacity activeOpacity={0.7} key={i} style={{ marginLeft: RFPercentage(2), borderColor: Colors.primary, borderWidth: RFPercentage(0.1), justifyContent: 'center', alignItems: 'center', width: RFPercentage(14), height: RFPercentage(4.5), borderRadius: RFPercentage(1.2) }} >
                            <Text style={{ color: Colors.black, fontFamily: 'Montserrat_400Regular', fontSize: RFPercentage(2.1) }} >
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <View style={{ bottom: RFPercentage(0.5), marginTop: RFPercentage(2.7), width: '90%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center' }} >
                <Text style={{ fontSize: RFPercentage(3), color: Colors.black, fontFamily: 'Montserrat_400Regular' }} >
                    Recomended
                </Text>
            </View>

            {/* Cart */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {propertiesCartData.map((item, i) => (
                        <View key={i} style={{ marginTop: i !== 0 ? RFPercentage(2) : 0, width: '100%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center' }} >
                            <TouchableOpacity onPress={() => props.navigation.navigate("DetailPageScreen")} activeOpacity={0.8} style={{ marginTop: RFPercentage(3), justifyContent: 'center', alignItems: 'flex-start', width: '90%', alignSelf: 'center' }} >
                                <Image source={item.imageSource} style={{ borderRadius: RFPercentage(2), width: '100%', height: RFPercentage(40) }} />
                            </TouchableOpacity>
                            <View style={{ marginTop: RFPercentage(1.7), width: '90%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', alignSelf: 'center' }} >
                                <Text style={{ fontFamily: 'Montserrat_600SemiBold', fontSize: RFPercentage(2.2), color: Colors.black }} >
                                    {item.propName}
                                </Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 0 }} >
                                    <Text style={{ fontFamily: 'Montserrat_700Bold', fontSize: RFPercentage(2.2), color: Colors.primary }} >
                                        {item.price}
                                    </Text>
                                    <Text style={{ left: RFPercentage(0.5), fontFamily: 'Montserrat_600SemiBold', fontSize: RFPercentage(2.2), color: Colors.black }} >
                                        {item.period}
                                    </Text>

                                </View>
                            </View>
                            <View style={{ marginTop: RFPercentage(1), width: '90%', alignSelf: 'center', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >
                                <Text style={{ fontFamily: 'Montserrat_400Regular', fontSize: RFPercentage(1.7), color: Colors.darkGrey }} >
                                    {item.noOfBeds}
                                </Text>
                                <Text style={{ marginLeft: RFPercentage(5), fontFamily: 'Montserrat_400Regular', fontSize: RFPercentage(1.7), color: Colors.darkGrey }} >
                                    {item.noOfBaths}
                                </Text>
                                <Text style={{ marginLeft: RFPercentage(5), fontFamily: 'Montserrat_400Regular', fontSize: RFPercentage(1.7), color: Colors.darkGrey }} >
                                    {item.area}
                                </Text>
                            </View>
                        </View>
                    ))}

                    <View style={{ marginBottom: RFPercentage(30) }} />
                </View>
            </ScrollView>

            {/* Plus */}
            <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', bottom: RFPercentage(3), right: RFPercentage(3) }} >
                <LinearGradient colors={['#38EF7D', '#11998E']} start={[1, 1]} end={[0.5, 0.1]} style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(9.8), height: RFPercentage(9.8), borderRadius: RFPercentage(30) }} >
                    <Feather name="plus" style={{ fontSize: RFPercentage(5.4) }} color={Colors.white} />
                </LinearGradient>
            </TouchableOpacity>
        </Screen >
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
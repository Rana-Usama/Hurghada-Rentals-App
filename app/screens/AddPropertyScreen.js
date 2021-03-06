import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Modal, Dimensions, TouchableOpacity, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import * as ImagePicker from 'expo-image-picker';
import { Entypo } from "@expo/vector-icons";

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';
import ImageAddingComponent from '../components/common/ImageAddingComponent';

//config
import Colors from '../config/Colors';

const { height } = Dimensions.get("window");

function AddPropertyScreen(props) {

    const [serveas, setserveas] = useState("")

    // Input fields
    const [inputField, SetInputField] = useState([
        {
            placeholder: "Add Title",
            value: "",
        },
        {
            placeholder: "No of Beds",
            value: "",
        },
        {
            placeholder: "No of Baths",
            value: "",
        },
        {
            placeholder: "Total Area",
            value: "",
        },
        {
            placeholder: "Price",
            value: "",
        },
        {
            placeholder: "City/State/Postal Code",
            value: "",
        },
        {
            placeholder: "Ad Description",
            placeholderAtStart: true,
            multiLine: true,
            value: "",
        },

    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const iconComponent = () => {
        return <MaterialCommunityIcons
            name={"chevron-down"}
            size={20}
            color={"grey"}
        />
    }

    // Image Picker stuff
    const [pickerModel, setPickerModel] = useState(false);
    const [currentImageBox, setcurrentImageBox] = useState(null);

    const [shelfMainPhoto, setshelfMainPhoto] = useState(false)
    const [shelfPhotoGall1, setshelfPhotoGall1] = useState(false)
    const [shelfPhotoGall2, setshelfPhotoGall2] = useState(false)
    const [shelfPhotoGall3, setshelfPhotoGall3] = useState(false)

    const [bottomTab, setBottomTab] = useState(true);
    const [model, setModel] = useState(false);

    const uploadImages = async (imageSelecor) => {
        try {
            await ImagePicker.requestMediaLibraryPermissionsAsync();
            await ImagePicker.requestCameraPermissionsAsync()
            await ImagePicker.getCameraPermissionsAsync()
            let permissionResult = await ImagePicker.getMediaLibraryPermissionsAsync();

            if (permissionResult.granted === false) {
                alert("Permission to access camera roll is required!");
                return;
            }
            let pickerResult;
            if (imageSelecor === "camera") {
                pickerResult = await ImagePicker.launchCameraAsync();
            }
            else if (imageSelecor === "gallery") {
                pickerResult = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: 'Images'
                });
            }


            if (currentImageBox === 1) {
                setshelfMainPhoto(pickerResult)
                setPickerModel(false)
            }
            else if (currentImageBox === 2) {
                setshelfPhotoGall1(pickerResult)
                setPickerModel(false)
            }
            else if (currentImageBox === 3) {
                console.log("here")
                setshelfPhotoGall2(pickerResult)
                setPickerModel(false)
            }
            else if (currentImageBox === 4) {
                setshelfPhotoGall3(pickerResult)
                setPickerModel(false)
            }

        } catch (error) {

        }
    }

    return (
        <Screen style={styles.screen}>

            {/* Nav */}
            <View style={{ marginTop: RFPercentage(4), width: '90%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                {/* Back */}
                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("HomeScreen")} style={{ position: 'absolute', left: 0 }} >
                    <LinearGradient colors={['#38EF7D', '#11998E']} start={[1, 1]} end={[0.5, 0.1]} style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(5.2), height: RFPercentage(5.2), borderRadius: RFPercentage(30) }} >
                        <Ionicons name="chevron-back-outline" style={{ fontSize: RFPercentage(4) }} color={Colors.white} />
                    </LinearGradient>
                </TouchableOpacity>
                <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.6), fontFamily: 'Montserrat_700Bold' }} >
                    Add Property
                </Text>
            </View>

            <View style={{ marginTop: RFPercentage(6), width: '90%', justifyContent: 'center', alignItems: 'flex-start' }} >
                <Text style={{ color: Colors.black, fontFamily: 'Montserrat_700Bold', fontSize: RFPercentage(3) }} >
                    Ad Details
                </Text>
            </View>

            {/* Input Fields */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 1, width: '100%' }}
            >
                <ScrollView style={{ flex: 1, width: '100%', marginTop: RFPercentage(2) }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <View style={{ borderColor: Colors.grey, height: RFPercentage(7), borderWidth: RFPercentage(0.2), borderRadius: RFPercentage(2), width: '90%', justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(3) }} >
                            <View style={{ width: '90%' }} >
                                <RNPickerSelect
                                    onValueChange={(value) => setserveas(value)}
                                    placeholder={{ label: 'Property Type' }}
                                    Icon={Platform.OS == 'android' ? null : iconComponent}
                                    items={[
                                        { label: 'Apartment', value: 'Apartment' },
                                        { label: 'Studio', value: 'Studio' },
                                        { label: 'Duplex', value: 'Duplex' },
                                        { label: 'Villa', value: 'Villa' },
                                    ]}
                                />
                            </View>
                        </View>

                        <View style={{ borderColor: Colors.grey, height: RFPercentage(7), borderWidth: RFPercentage(0.2), borderRadius: RFPercentage(2), width: '90%', justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(3) }} >
                            <View style={{ width: '90%' }} >
                                <RNPickerSelect
                                    onValueChange={(value) => setserveas(value)}
                                    placeholder={{ label: 'Select Location of your Property' }}
                                    Icon={Platform.OS == 'android' ? null : iconComponent}
                                    items={[
                                        { label: 'Hurghada', value: 'Hurghada' },
                                        { label: 'Sahl Hasheesh', value: 'Sahl Hasheesh' },
                                        { label: 'Makadi', value: 'Makadi' },
                                        { label: 'El Gouna', value: 'El Gouna' },
                                        { label: 'Magawish', value: 'Magawish' },
                                        { label: 'El Ahyaa', value: 'El Ahyaa' },
                                        { label: 'El Helal', value: 'El Helal' },
                                        { label: 'El Kawther', value: 'El Kawther' },
                                        { label: 'El Dahar', value: 'El Dahar' },
                                        { label: 'Intercontinental District', value: 'Intercontinental District' },
                                    ]}
                                />
                            </View>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            {inputField.map((item, i) => (
                                <View key={i} style={{ marginTop: i == 0 ? RFPercentage(2.5) : RFPercentage(2) }} >
                                    <InputField
                                        placeholder={item.placeholder}
                                        placeholderColor={'#1115146E'}
                                        height={i == 6 ? RFPercentage(24) : RFPercentage(7)}
                                        backgroundColor={'#F4FFF83B'}
                                        borderWidth={RFPercentage(0.2)}
                                        borderColor={Colors.grey}
                                        secure={item.secure}
                                        multiline={item.multiLine}
                                        placeholderAtStart={item.placeholderAtStart}
                                        borderRadius={RFPercentage(2)}
                                        color={Colors.black}
                                        fontSize={RFPercentage(2)}
                                        handleFeild={(text) => handleChange(text, i)}
                                        value={item.value}
                                        width={"94%"}
                                    />
                                </View>
                            ))}
                        </View>

                        <View style={{ marginTop: RFPercentage(3), width: '89%', justifyContent: 'center', alignItems: 'flex-start' }} >
                            <Text style={{ color: Colors.black, fontFamily: 'Montserrat_500Medium', fontSize: RFPercentage(2) }} >
                                Property Images
                            </Text>
                        </View>
                        <View style={{ marginTop: RFPercentage(3), width: '89%', justifyContent: 'center', alignItems: 'flex-start' }} >
                            <Text style={{ color: Colors.grey, fontFamily: 'Montserrat_400Regular', fontSize: RFPercentage(1.9) }} >
                                Add Photos
                            </Text>
                        </View>

                        <ImageAddingComponent
                            onUploadImage1={() => {
                                setcurrentImageBox(2)
                                setPickerModel(true)
                            }}
                            onUploadImage2={() => {
                                setcurrentImageBox(3)
                                setPickerModel(true)
                            }}
                            onUploadImage3={() => {
                                setcurrentImageBox(4)
                                setPickerModel(true)
                            }}
                            shelfMainPhoto={shelfPhotoGall1}
                            shelfPhotoGall2={shelfPhotoGall2}
                            shelfPhotoGall3={shelfPhotoGall3}
                            threeBoxes={true} title1="Shelf Photo Gallery" title2="Upload other photos for this listing" />

                        {/*Bottom Button */}
                        <TouchableOpacity activeOpacity={0.8} style={{ width: '100%', alignSelf: 'center', marginTop: RFPercentage(6) }} >
                            <LinearGradient colors={['#38EF7D', '#11998E']} start={[1, 1]} end={[0.5, 0.1]} style={{ justifyContent: 'center', alignSelf: 'center', alignItems: 'center', width: '80%', height: RFPercentage(7), borderRadius: RFPercentage(2.8) }} >
                                <Text style={{ color: Colors.white, fontSize: RFPercentage(2.2), fontFamily: 'Montserrat_600SemiBold' }} >
                                    Publish Ad
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <View style={{ marginBottom: RFPercentage(4) }} />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

            {/* Modal for adding photo */}
            <Modal visible={pickerModel} transparent={true} >
                <View style={{ justifyContent: "flex-end", flex: 1, height: height, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.6)" }} >
                    <View style={{ alignItems: "center", borderTopLeftRadius: RFPercentage(3), borderTopRightRadius: RFPercentage(3), backgroundColor: Colors.white, width: "100%", height: RFPercentage(25) }} >
                        <View style={{ width: "90%", marginTop: RFPercentage(1.5) }} >
                            <TouchableOpacity onPress={() => setPickerModel(false)} >
                                <Entypo size={RFPercentage(3)} name="cross" color={Colors.grey} />
                            </TouchableOpacity>
                            <Text style={{ marginTop: RFPercentage(1), marginLeft: RFPercentage(1), fontSize: RFPercentage(2), fontWeight: "bold" }} >Select Photo</Text>
                            <TouchableOpacity onPress={() => uploadImages("camera")} style={{ backgroundColor: "#F7F7F7", marginTop: RFPercentage(1), borderRadius: RFPercentage(1), justifyContent: "center", width: "96%", marginLeft: "2%", height: RFPercentage(5.5), borderWidth: 1, borderColor: "#3A3384" }} >
                                <Text style={{ marginLeft: RFPercentage(2), fontSize: RFPercentage(2.2) }} >Camera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => uploadImages("gallery")} style={{ backgroundColor: "#F7F7F7", marginTop: RFPercentage(1), borderRadius: RFPercentage(1), justifyContent: "center", width: "96%", marginLeft: "2%", height: RFPercentage(5.5), borderWidth: 0, borderColor: "#3A3384" }} >
                                <Text style={{ marginLeft: RFPercentage(2), fontSize: RFPercentage(2.2) }} >Photo Gallery</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
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

export default AddPropertyScreen;
import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({ navigation }) => {
    const [Data, setData] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');

    // Function to get the logged-in user
    const getLoggedInUser = async () => {
        try {
            let data = await AsyncStorage.getItem('logedinUser');
            if (data) {
                const parsedData = JSON.parse(data);
                setData(parsedData);
                setName(parsedData.name);
                setEmail(parsedData.email);
                setAddress(parsedData.address);
                setPassword(parsedData.password);
            }
        } catch (error) {
            console.error('Error fetching logged-in user:', error);
        }
    };

    // Save updated user data
    const saveUserData = async () => {
        try {
            const updatedData = {
                name: name || Data.name,
                email: email || Data.email,
                address: address || Data.address,
                password: password || Data.password,
            };
            await AsyncStorage.setItem('logedinUser', JSON.stringify(updatedData));
            alert('User data updated successfully!');
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    // Logout function
    const logout = async () => {
        await AsyncStorage.removeItem('logedinUser');
        navigation.replace("Splash");
    };

    useEffect(() => {
        getLoggedInUser();
    }, []);

    return (
        <View style={styles.main}>
            {/* Background Red Section */}
            <View style={styles.topRedBackground}>
                {/* Background Images with Reduced Opacity */}
                {/* <Image source={require('../../assets/pngwings/leftProfile.png')} style={styles.img1} />
                <Image source={require('../../assets/pngwings/rightProfile.png')} style={styles.img2} /> */}
            </View>

            {/* Profile Section */}
            <View style={styles.backGround}>
                <Image source={require('../../assets/profilepic.jpeg')} style={styles.profilePhoto} />
                <View style={styles.form}>
                    <KeyboardAvoidingView 
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={{ flex: 1 }}>
                        <ScrollView>
                            <View style={styles.inputContainer}>
                                {/* Name Field */}
                                <View style={styles.fieldContainer}>
                                    <Text style={styles.label}>Name</Text>
                                    <TextInput
                                        placeholder={Data.name || 'Adam'}
                                        value={name}
                                        style={styles.input}
                                        onChangeText={setName}
                                    />
                                </View>

                                {/* Email Field */}
                                <View style={styles.fieldContainer}>
                                    <Text style={styles.label}>Email</Text>
                                    <TextInput
                                        placeholder={Data.email || "example@gmail.com"}
                                        value={email}
                                        style={styles.input}
                                        onChangeText={setEmail}
                                    />
                                </View>

                                {/* Address Field */}
                                <View style={styles.fieldContainer}>
                                    <Text style={styles.label}>Delivery Address</Text>
                                    <TextInput
                                        placeholder={Data.address || '123 Main St, New York, NY'}
                                        value={address}
                                        style={styles.input}
                                        onChangeText={setAddress}
                                    />
                                </View>

                                {/* Password Field */}
                                <View style={styles.fieldContainer}>
                                    <Text style={styles.label}>Password</Text>
                                    <TextInput
                                        placeholder="********"
                                        value={password}
                                        secureTextEntry={true}
                                        style={styles.input}
                                        onChangeText={setPassword}
                                    />
                                </View>

                                {/* Action Links */}
                                <View style={styles.actionLinks}>
                                    <TouchableOpacity>
                                        <Text style={styles.actionButtonText}>Payment Details</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={styles.actionButtonText}>Order History</Text>
                                    </TouchableOpacity>
                                </View>

                                {/* Edit and Logout Buttons */}
                                <View style={styles.buttonRow}>
                                    <TouchableOpacity style={styles.saveButton} onPress={saveUserData}>
                                        <Text style={styles.saveButtonText}>Edit Profile</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                                        <Text style={styles.logoutButtonText}>Logout</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </View>
            </View>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    topRedBackground: {
        height: 250,
        backgroundColor: 'rgba(255, 0, 0, 0.9)',  // Solid red background with slight transparency
        position: 'relative',
    },
    img1: {
        width: 100,  // Resized width
        height: 150,  // Resized height
        position: 'absolute',
        top: 50,
        left: 10,
        opacity: 0.3,  // Reduced opacity
    },
    img2: {
        width: 100,  // Resized width
        height: 150,  // Resized height
        position: 'absolute',
        top: 50,
        right: 10,
        opacity: 0.3,  // Reduced opacity
    },
    backGround: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -50,  // Adjusted to align with profile picture
        paddingTop: 80,
    },
    profilePhoto: {
        width: 120,
        height: 120,
        borderRadius: 60,
        alignSelf: 'center',
        position: 'absolute',
        top: -60,
        borderWidth: 4,
        borderColor: 'white',
    },
    form: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 80,
    },
    inputContainer: {
        paddingHorizontal: 20,
    },
    fieldContainer: {
        marginBottom: 20,
    },
    label: {
        marginBottom: 5,
        color: '#888',
        fontSize: 16,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#000',
    },
    actionLinks: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 15,
        marginBottom: 15,
    },
    actionButtonText: {
        fontSize: 16,
        color: '#888',
        paddingVertical: 10,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    saveButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        flex: 1,
        marginRight: 10,
    },
    saveButtonText: {
        fontSize: 16,
        color: '#fff',
    },
    logoutButton: {
        backgroundColor: '#FF5757',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        flex: 1,
        marginLeft: 10,
    },
    logoutButtonText: {
        fontSize: 16,
        color: '#fff',
    },
});

import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';



const Success = ({navigation}) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: "100%",
            width: "100%"


        }}>
            <View style={{
                backgroundColor: "white",
                height: 400, width: 340,

                // justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
                shadowColor: "#000",
                shadowOffset: { width: 4, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 10,

                elevation: 8
            }}>
                <View style={{
                    // flex: 1,
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    marginTop: 26,
                }}>
                    <Ionicons name="checkmark-circle" size={90} color="red" />
                </View>
                <Text
                    style={{

                        textAlign: 'center',
                        color: 'red',
                        fontSize: 25,
                        marginTop: 26

                    }}
                >Success !</Text>
                <View
                    style={{
                        // flex: 1,
                        // justifyContent: 'center',
                        // alignItems: 'center',
                        // paddingVertical: 20

                        paddingHorizontal: 55,



                    }}>
                    <Text
                        style={{

                            textAlign: 'center',
                            fontSize: 15,
                            marginTop: 26,
                            color:"#808080"

                        }}
                    >Your payment was successful. A receipt for this purchase has been sent to your email.</Text>
                </View>
                <TouchableOpacity
                    onPress={()=>{navigation.navigate('Home')}}
                    style={{backgroundColor:"red",
                        width:"65%",
                        height:"15%",
                        borderRadius:15,
                        justifyContent:'center',
                        alignItems:'center',
                        marginTop:26
                    }}
                >
                    <View>
                        <Text
                         style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "white",
                          }}>Go Back</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default Success

const styles = StyleSheet.create({})
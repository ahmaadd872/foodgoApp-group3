import { ActivityIndicator, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from 'expo-linear-gradient';

const Splash = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      navigation.replace("Home");
    },3000);

  }, [isFocused]);

 

  return (
    
    <LinearGradient
      colors={['#FF939B','#EF2A39' ]} // Your gradient colors
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
    <View style={{
      flex: 1,
      height: "100%",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
     

    }}>

      <View style={
        {
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Text style={
          {
            color: "#ffffff",
            fontFamily: 'Lobster', fontSize: 60
          }
        }>Foodgo</Text>
      </View>


      <View style={styles.bottomContainer}>
        <View style={{
          flexDirection: "row"
        }}>
          <Image
            source={require("../../assets/splash_burgur.png")}
            style={
              {
                width: 246,
                height: 288,
                position: "relative",
                top: 50,
                right: 10
              }
            }
          />
          <Image
            source={require("../../assets/splash_burgur2.png")}
            style={{
              width: 202,
              height: 202,
              position: "relative",
              top: 120,
              right: 90,
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.5,
              shadowRadius: 10,
              // Elevation for Android
              elevation: 10,
            }}
          />
        </View>
      </View>
    </View>
    </LinearGradient>
  );
};

export default Splash;

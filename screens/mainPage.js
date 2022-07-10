import React from 'react';
import { Button } from '@ui-kitten/components';
import { useNavigation } from "@react-navigation/native";
import { Alert, StyleSheet, Text, View } from 'react-native';

export default MainPage = () => {

    const navigation = useNavigation();

    const redirectToDonationPage = () => {
        navigation.navigate("Donation");
    }

    return (
        <View style={styles.container}>
            <Text category='h1'>Welcome Back!</Text>
            <Button style={styles.button} onPress={
                () =>  Alert.alert("Logout?",
                        "",
                        [
                            {
                                text: "QR (Camera)",
                                onPress: () => console.log("Open camera app"),
                            },
                            {
                                text: "NFC",
                                onPress: () => console.log("NFC"),
                            },
                        ])}>PAY</Button>
            <Button style={styles.button} onPress={() => redirectToDonationPage()}>DONATE</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        justifyContent: 'center',
        backgroundColor: '#ED1A3B',
        textAlign: "center",
        alignSelf:"center",
        margin: 20,
        width: 200,
        height: 100,
    }
})

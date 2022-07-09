import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Layout } from '@ui-kitten/components';
import { updateDonation } from '../firebase';
import { Alert, KeyboardAvoidingView, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default PaymentPage = () => {
    const [totalAmount, setTotalAmount] = useState("");
    const payableAmount = 25.90;

    const navigation = useNavigation();

    const returnBack = () => {
        navigation.navigate("MainPage");
    }

    const pay = () => {
        Alert.alert(
            "Confirm Payement?",
            [
                {
                    text: "Confirm",
                    onPress: () => {handlePayment()},
                },
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancelled!!"),
                    style:"cancel"
                },
            ],
            { cancelable: true }
        )
    }

    const handlePayment = () => {
        updateDonation(totalAmount);
        navigation.navigate("MainPage");
    }

    return (
        <ScrollView>
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <Text style={styles.title}>Payment</Text>
            <Text style={styles.title}
                value = {payableAmount}
            />

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} 
                    placeholder="Enter Payment Amount" 
                    value={totalAmount} 
                    keyboardType = 'number-pad'
                    onChangeText={(text) => setTotalAmount(text)} />
                    
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={pay}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Pay</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={returnBack}
                style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Back</Text>
            </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    button: {
      backgroundColor: '#a12427',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#a12427',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#a12427',
      fontWeight: '700',
      fontSize: 16,
    },
    fieldTitle: {
        color: 'black',
        fontSize: 16,
        textAlign: 'left',
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 32,
        textAlign: 'center',
    }
});
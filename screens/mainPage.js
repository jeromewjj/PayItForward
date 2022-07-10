import React, { useState } from 'react';
import { Button } from '@ui-kitten/components';
import { useNavigation } from "@react-navigation/native";
import { Alert, StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';

export default MainPage = () => {

    const navigation = useNavigation();

    const redirectToDonationPage = () => {
        navigation.navigate("Donation");
    }

    const redirectToPaymentPage = () => {
        navigation.navigate("Payment");
    }

    const [modal1open, setmodal1open]=useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Back!</Text>

            <Modal transparent visible={modal1open} >
                <View style={styles.ModalBackground}>
                <View style={styles.Modalcontent}>
                    <Text style={{fontWeight:'bold',fontSize:18}}>{"Please select one option"}</Text>
                    <View style={styles.bottwo}>
                        <TouchableOpacity style={styles.yesnobutton} onPress={()=> redirectToPaymentPage()} activeOpacity={0.5} >
                        <Text style={styles.bottwobuttontext}>QR Code</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.yesnobutton} onPress={()=> redirectToPaymentPage()} activeOpacity={0.5}>
                        <Text style={styles.bottwobuttontext}>NFC</Text>
                        </TouchableOpacity>
                    </View> 

                </View>
                </View>
            </Modal>
            
            <Button style={styles.button} onPress={
                () =>  setmodal1open(!modal1open)}>PAY</Button>
            <Button style={styles.button} onPress={() => redirectToDonationPage()}>DONATE</Button>

            <Text style={styles.month}>July 2022: you have donated</Text>
            <Text style={styles.amountDonated}>$100</Text>
            <Text style={styles.text}>
                <Text>Benefitting</Text><Text styles={{fontWeight: 'bold'}}> 6 </Text><Text>recipients.</Text>
            </Text>
            <Text style={styles.rankArea}>#2 in Senkgang</Text>
            <Text style={styles.rankCountry}>#40 in Singapore</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    title: {
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf:"center",
        marginTop: 20,
        marginBottom: 20
    },

    button: {
        borderRadius: 8,
        justifyContent: 'center',
        backgroundColor: '#ED1A3B',
        textAlign: "center",
        alignSelf:"center",
        margin: 20,
        width: 200,
        height: 100,
    },

    yesnobutton:{
        backgroundColor:'red',
        padding:10,
        margin:25,
        marginTop:50,
        borderRadius:10,
        alignItems:'center',
        flexDirection: 'row'
    },

    bottwobutton:{
        backgroundColor:'red',
        padding:7,
        margin:50,
        marginTop:40,
        borderRadius:20,
        flex:1,
        alignItems:'center'
    },

    bottwo:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    bottwobuttontext:{
        fontSize:18,
        color:'white',
        fontWeight:'bold',
        alignSelf:"center",
        textAlign: "center",
    },

    Modalcontent:{
        backgroundColor:'white',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        height:300,
        width:300
    },

    ModalBackground:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#00000080',
    },

    month : {
        fontSize: 25,
        alignSelf:"center",
        marginTop: 20,
        marginBottom: 20
    },

    amountDonated : {
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf:"center",
        color : '#daa520',
    },

    text : {
        marginTop: 20,
        fontSize: 20,
        alignSelf:"center",
    },

    rankArea : {
        marginTop: 20,
        fontSize: 20,
        alignSelf:"center",
    },

    rankCountry : {
        marginTop: 20,
        fontSize: 20,
        alignSelf:"center",
    }
    
})

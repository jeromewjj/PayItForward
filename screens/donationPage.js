import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert,TouchableWithoutFeedback, Button, Pressable, Modal} from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { RadioButton } from 'react-radio-buttons';


export default DonationPage = ({ navigation }) => {
    const data = [
        { value: '$5' },
        { value: '$10' },
        { value: '$50' },
        { value: '$100' },
      ];

    const [modal1open, setmodal1open]=useState(false);
    const [modal2open, setmodal2open]=useState(false);
    const [userOption, setUserOption] = useState(null);
    const BackHandler = () => navigation.navigate('MainPage');
    const DonateHandler = () => setmodal1open(!modal1open);
    const ThankyouHandler =() => setmodal2open(!modal2open);
    
    const DoubleHandler = () => {
        setmodal1open(!modal1open);
        setmodal2open(!modal2open);
    }

    var amt=null;

    return (   
    <View>
        <Text category='h1' style={styles.header} >Donation</Text>

    <View style={styles.align}>
        {data.map((item) => {
        return (
            <Pressable
            style={ 
              item.value === userOption ? styles.selected : styles.unselected
            } 
            onPress={() => setUserOption(item.value)}
          >
            <Text key={item.value} style={styles.option}> {item.value}</Text>
          </Pressable>
        );
        })}
    </View>
    <View style={styles.bottwo}>
        <Pressable style={styles.bottwobutton} onPress={BackHandler}>
            <Text style={styles.bottwobuttontext}>{"BACK"}</Text>
        </Pressable>

        <Modal transparent visible={modal1open} >
            <View style={styles.ModalBackground}>
            <View style={styles.Modalcontent}>
            <Text style={{fontWeight:'bold',fontSize:18}}>{"Confirm your donation of "+userOption+ "?"}</Text>
             <View style={styles.bottwo}>
                <Pressable style={styles.yesnobutton} onPress={DonateHandler}>
                <Text style={styles.bottwobuttontext}>No</Text>
                </Pressable>

                <Pressable style={styles.yesnobutton} onPress={ThankyouHandler}>
                <Text style={styles.bottwobuttontext}>Yes</Text>
                </Pressable>
             </View> 

            </View>
            </View>
        </Modal>

        <Modal transparent visible={modal2open} >            
            <View style={styles.ModalBackground}>
                <View style={styles.Modalcontent}>
                <Text style={{fontWeight:'bold',fontSize:18}}>Thank you for donating!</Text>
                <Pressable style={styles.backbutton} onPress={DoubleHandler}>
                    <Text style={styles.bottwobuttontext}>BACK</Text>
                </Pressable>
                </View>
            </View>
        </Modal>

        <Pressable style={styles.bottwobutton} onPress={DonateHandler}>
            <Text style={styles.bottwobuttontext}>{"DONATE"}</Text>
        </Pressable>
    </View>
    </View>
    );
    }

  const styles = StyleSheet.create({
    header:{
        textAlign: 'center',
        backgroundColor:'red',
        color:'white',
        fontSize:30,
        marginBottom:20
    },
    option:{
        textAlign:'center',
        fontSize: 20,
        color:'black',
        fontWeight:'bold'
    },
    align:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottwo:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottwobutton:{
        backgroundColor:'red',
        padding:10,
        margin:50,
        marginTop:75,
        borderRadius:20,
        flex:1,
        alignItems:'center'
    },
    bottwobuttontext:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
    },
    selected:{
        backgroundColor: 'pink',
        width:'50%',
        justifyContent: 'center',
        alignItems: 'center',
        padding:15,
        margin:15
    },
    unselected:{
        backgroundColor: '#D3D3D3',
        width:'50%',
        justifyContent: 'center',
        alignItems: 'center',
        padding:15,
        margin:15
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
        backgroundColor:'#00000080'
    },
    yesnobutton:{
        backgroundColor:'red',
        padding:20,
        margin:25,
        borderRadius:10,
        alignItems:'center',
        justifyContent: 'center',
    },
    backbutton:{
        backgroundColor:'red',
        padding:10,
        borderRadius:10,
        alignItems:'center',
        margin:20,
        marginTop:40
    }

  })
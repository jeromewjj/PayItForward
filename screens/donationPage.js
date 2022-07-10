import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert,TouchableWithoutFeedback, Button, Pressable, Modal, TouchableOpacity} from 'react-native';
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
    const [modal3open, setmodal3open]=useState(false);
    const [userOption, setUserOption] = useState(null);
    const BackHandler = () => navigation.navigate('MainPage');
    const DonateHandler = () => {
        if (userOption==null){
            setmodal3open(!modal3open);
    }
    else {
        setmodal1open(!modal1open);
    }}
    const ThankyouHandler =() => setmodal2open(!modal2open);
    
    const DoubleHandler = () => {
        setmodal1open(!modal1open);
        setmodal2open(!modal2open);
    }

    var amt=null;

    return (   
    <View>
        <Text category='h1' style={styles.header} >Donation</Text>

        <Text style={styles.text}>Kindly choose the amount you would like to donate:</Text>

    <View style={styles.align}>
        {data.map((item) => {
        return (            
            <TouchableOpacity
            style={ 
              item.value === userOption ? styles.selected : styles.unselected
            } 
            onPress={() => setUserOption(item.value)} activeOpacity={0.5}
          >
            <Text key={item.value} style={styles.option}> {item.value}</Text>
          </TouchableOpacity>
        );
        })}
    </View>
    <View style={styles.bottwo}>
        <TouchableOpacity style={styles.bottwobutton} onPress={BackHandler} activeOpacity={0.5}>
            <Text style={styles.bottwobuttontext}>{"BACK"}</Text>
        </TouchableOpacity>

        <Modal transparent visible={modal1open} >
            <View style={styles.ModalBackground}>
            <View style={styles.Modalcontent}>
            <Text style={{fontWeight:'bold',fontSize:18}}>{"Confirm your donation of "+userOption+ "?"}</Text>
             <View style={styles.bottwo}>
                <TouchableOpacity style={styles.yesnobutton} onPress={DonateHandler} activeOpacity={0.5} >
                <Text style={styles.bottwobuttontext}>No</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.yesnobutton} onPress={ThankyouHandler} activeOpacity={0.5}>
                <Text style={styles.bottwobuttontext}>Yes</Text>
                </TouchableOpacity>
             </View> 

            </View>
            </View>
        </Modal>

        <Modal transparent visible={modal2open} >            
            <View style={styles.ModalBackground}>
                <View style={styles.Modalcontent}>
                <Text style={{fontWeight:'bold',fontSize:18}}>Thank you for donating!</Text>
                <TouchableOpacity style={styles.backbutton} onPress={DoubleHandler} activeOpacity={0.5}>
                    <Text style={styles.bottwobuttontext}>BACK</Text>
                </TouchableOpacity>
                </View>
            </View>
        </Modal>

        <Modal transparent visible={modal3open}> 
            <View style={styles.ModalBackground}>
                    <View style={styles.Modalcontent}>
                    <Text style={{fontWeight:'bold',fontSize:18}}>Please select an amount first.</Text>
                    <TouchableOpacity style={styles.backbutton} onPress={()=>setmodal3open(!modal3open)}>
                        <Text style={styles.bottwobuttontext}>BACK</Text>
                    </TouchableOpacity>
                    </View>
                </View>
        </Modal>

        <TouchableOpacity style={styles.bottwobutton} onPress={DonateHandler} activeOpacity={0.5}> 
            <Text style={styles.bottwobuttontext}>{"DONATE"}</Text>
        </TouchableOpacity>
    </View>
    </View>
    );
    }

  const styles = StyleSheet.create({
    header:{
        textAlign: 'center',
        backgroundColor:'red',
        color:'white',
        fontSize:25,
        marginBottom:20
    },
    text:{
        textAlign: 'center',
        fontWeight:'bold',
        fontSize:18,
        marginBottom:15
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
        padding:7,
        margin:50,
        marginTop:40,
        borderRadius:20,
        flex:1,
        alignItems:'center'
    },
    bottwobuttontext:{
        fontSize:18,
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
        padding:10,
        margin:25,
        marginTop:50,
        borderRadius:10,
        alignItems:'center',
        flex:1
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
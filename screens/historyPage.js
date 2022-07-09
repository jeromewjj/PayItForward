import React from 'react';
import { Button } from '@ui-kitten/components';
import { useNavigation } from "@react-navigation/native";
import { useTailwind } from 'tailwind-rn'
import { StyleSheet, Text, View, FlatList } from 'react-native';


export default HistoryPage = () => {

    const navigation = useNavigation();
    const tailwind = useTailwind();

    const redirectToMainPage = () => {
        navigation.navigate("MainPage");
    }

    const renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <View style={{alignItems:"flex-start",flex:1}}>
                <Text style={item.status ==  "Expenses" 
                    ? {fontWeight:"bold", fontStyle: 'italic', color : 'red'} 
                    : item.status ==  "Benefits" 
                        ? {fontWeight:"bold", fontStyle: 'italic', color : 'green'} 
                        : {fontWeight:"bold", fontStyle: 'italic', color : '#daa520'} }>
                            {item.status}
                </Text> 
                <Text style={{fontWeight:"bold"}}>{item.description}</Text>
            </View>
            <Text style={item.status ==  "Expenses" 
                    ? {fontWeight:"bold", fontStyle: 'italic', color : 'red'} 
                    : item.status ==  "Benefits" 
                        ? {fontWeight:"bold", fontStyle: 'italic', color : 'green'} 
                        : {fontWeight:"bold", fontStyle: 'italic', color : '#daa520'} }>
                            {item.status ==  "Benefits" ? "+" + item.value : item.status ==  "Expenses" ? "-" + item.value : item.value}</Text>
        </View>
    );

    // Temp data

    var state = {
        data:[
            {
                "status" : "Expenses",
                "description" : "Hougang Wanton Noodles",
                "value" : "$3.50",
                "Date" : "9/7/2022"
            },

            {
                "status" : "Benefits",
                "description" : "From community",
                "value" : "$5.00",
                "Date" : "9/7/2022"
            },

            {
                "status" : "Expenses",
                "description" : "Groceries at JMart Anchorvale Link",
                "value" : "$10.95",
                "Date" : "5/7/2022"
            },

            {
                "status" : "Donation",
                "description" : "PayItForward",
                "value" : "$5.05",
                "Date" : "4/7/2022"
            },

            {
                "status" : "Expenses",
                "description" : "Groceries at JMart Anchorvale Link",
                "value" : "$15.00",
                "Date" : "3/7/2022"
            },

            {
                "status" : "Expenses",
                "description" : "Groceries at JMart Anchorvale Link",
                "value" : "$50.00",
                "Date" : "3/7/2022"
            },

            {
                "status" : "Donation",
                "description" : "PayItForward",
                "value" : "$50.00",
                "Date" : "1/7/2022"
            },

            {
                "status" : "Expenses",
                "description" : "Groceries at JMart Anchorvale Link",
                "value" : "$50.00",
                "Date" : "1/7/2022"
            }
        ]
    }
    
    return (
        <View style={styles.container}>
            <FlatList
            style={{flex:1}}
            data={state.data}
            renderItem={renderItem}
            />
            <Button style={styles.backButton} onPress={() => redirectToMainPage()}>BACK</Button>
      </View>
    );
}

const styles = StyleSheet.create({
    backButton: {
        borderRadius: 8,
        justifyContent: 'center',
        backgroundColor: '#ED1A3B',
        textAlign: "center",
        alignSelf:"center",
        margin: 20,
        width: 100,
        height: 50
    },

    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
    },

    listItem:{
        margin:10,
        padding:10,
        backgroundColor:"#FFF",
        width:"95%",
        flex:1,
        flexDirection:"row",
        borderRadius:5
      }
})
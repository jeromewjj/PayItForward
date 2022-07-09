import React from 'react';
import { Button } from '@ui-kitten/components';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, FlatList, SectionList, StatusBar } from 'react-native';

export default HistoryPage = () => {

    const navigation = useNavigation();

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
    const stateGroupByDate =  [
        {
            title: "9 Jul 2022",
            data: [
                {
                    "status" : "Expenses",
                    "description" : "Hougang Wanton Noodles",
                    "value" : "$3.50",
                },
    
                {
                    "status" : "Benefits",
                    "description" : "From community",
                    "value" : "$5.00"
                },
            ]
        },

        {
            title: "5 Jul 2022",
            data: [
                {
                    "status" : "Expenses",
                    "description" : "Groceries at JMart Anchorvale Link",
                    "value" : "$10.95",
                },
            ]
        },

        {
            title: "4 Jul 2022",
            data: [
                {
                    "status" : "Donation",
                    "description" : "PayItForward",
                    "value" : "$5.05",
                },
            ]
        },

        {
            title: "1 Jul 2022",
            data: [
                {
                    "status" : "Expenses",
                    "description" : "Groceries at JMart Anchorvale Link",
                    "value" : "$50.00",
                },
            ]
        },

    ]
    
    return (
        <View style={styles.container}>
            {/* <FlatList
            style={{flex:1}}
            data={state.data}
            renderItem={renderItem}
            /> */}

            <SectionList
                sections={stateGroupByDate}
                renderItem={renderItem}
                renderSectionHeader={({section}) => <Text style={styles.section_style}>{section.title}</Text>}
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
      },

      container_style: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },

      item_style: {
        backgroundColor: '#B591FF',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        
      },
      
      header: {
        textAlign: 'center',
        backgroundColor: '#B2C2D2',
        padding: 20,
        fontSize: 20,
       
      },

      section_style: {
        textAlign: 'left',
        fontWeight:"bold",
        backgroundColor: 'transparent',
        padding: 20,
        fontSize: 20,

      }
})
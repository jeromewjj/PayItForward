import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


import MainPage from "./screens/mainPage";
import LoginPage from "./screens/loginPage";
import RegistrationPage from "./screens/registrationPage";
import PaymentPage from "./screens/paymentPage";
import DonationPage from "./screens/donationPage";
import HistoryPage from "./screens/historyPage";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export const HomeNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Register" component={RegistrationPage} />
            <Stack.Screen name="MainPage" component={MainPage} />
            <Stack.Screen name="Payment" component={PaymentPage} />
            <Stack.Screen name="Donation" component={DonationPage} />
            <Stack.Screen name="History" component={HistoryPage} />
        </Stack.Navigator>
    )
}

export const AppNavigator = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Login" screenOptions={{ headerShown: true }}>
                <Drawer.Screen name="Login" component={LoginPage} />
                <Drawer.Screen name="Register" component={RegistrationPage} />
                <Drawer.Screen name="HistoryPage" component={HistoryPage} />
                <Drawer.Screen name="MainPage" component={MainPage} />
                <Drawer.Screen name="Payment" component={PaymentPage} />
                <Drawer.Screen name="Donation" component={DonationPage} />
                <Drawer.Screen name="History" component={HistoryPage} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
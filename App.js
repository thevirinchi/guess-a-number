import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from "./components/Header/Header"

import StartGameScreen from "./screens/StartGameScreen"

import Colors from "./constants/Colors"

export default function App() {
	return (
		<View style={styles.screen}>
			<Header text="Guess a Number"/>
			<StartGameScreen/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: Colors.white,
	},
});
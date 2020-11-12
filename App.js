import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from "./components/Header/Header"

import StartGameScreen from "./screens/StartGameScreen"
import GameScreen from "./screens/GameScreen"

import Colors from "./constants/Colors"

export default function App() {

	const [number, setNumber] = useState()
	const [gameState, setGameState] = useState(0)

	const onStartHandler = input => {
		setNumber(input)
		setGameState(1)
	}

	return (
		<View style={styles.screen}>
			<Header text="Guess a Number" />
			{gameState ? <GameScreen userNumber={number} /> : <StartGameScreen onStart={onStartHandler} />}
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: Colors.white,
	},
});
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from "./components/Header/Header"

import StartGameScreen from "./screens/StartGameScreen"
import GameScreen from "./screens/GameScreen"
import GameOverScreen from "./screens/GameOver"

import Colors from "./constants/Colors"

let fonts = {
	'nunito-black': require('./assets/fonts/Nunito-Black.ttf'),
	'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
	'nunito-extra-bold': require('./assets/fonts/Nunito-ExtraBold.ttf'),
	'nunito-extra-light': require('./assets/fonts/Nunito-ExtraLight.ttf'),
	'nunito-light': require('./assets/fonts/Nunito-Light.ttf'),
	'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
	'nunito-semi-bold': require('./assets/fonts/Nunito-SemiBold.ttf')
};

export default function App() {

	const [number, setNumber] = useState()
	const [guesses, setGuesses] = useState()
	const [gameState, setGameState] = useState(0)
	const [dataLoaded, setDataLoaded] = useState(false)
	const [screen, setScreen] = useState(<StartGameScreen onStart={onStartHandler} />)

	const loadFonts = async () => {
		await Font.loadAsync(fonts)
		setDataLoaded(true)
	}

	useEffect(()=>{
		loadFonts()
	}, [])

	const onStartHandler = input => {
		setNumber(input)
		setGameState(1)
	}

	const onGameStart = () => {
		setNumber()
		setGuesses()
		setGameState(0)
	}

	const onGameFinish = (number, guesses) => {
		setNumber(number)
		setGuesses(guesses)
		setGameState(2)
	}

	useEffect(() => {
		switch (gameState) {
			case 0:
				setScreen(<StartGameScreen onStart={onStartHandler} />)
				break;
			case 1:
				setScreen(<GameScreen userNumber={number} onGameFinishHandler={onGameFinish} />)
				break;
			case 2:
				setScreen(<GameOverScreen number={number} guesses={guesses} onGameStartHandler={onGameStart} />)
				break;
		}
	}, [gameState])

	return (
		(dataLoaded
			?
				<View style={styles.screen}>
					<Header text="Guess a Number" />
					{screen}
				</View>
			:
				<AppLoading/>
		)
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: Colors.white,
	},
});
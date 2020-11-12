import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from "./components/Header/Header"

import StartGameScreen from "./screens/StartGameScreen"
import GameScreen from "./screens/GameScreen"
import GameOverScreen  from "./screens/GameOver"

import Colors from "./constants/Colors"

export default function App() {

	const [number, setNumber] = useState()
	const [guesses, setGuesses] = useState()
	const [gameState, setGameState] = useState(0)
	const [screen, setScreen] = useState(<StartGameScreen onStart={onStartHandler} />)

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

	useEffect (()=>{
		switch(gameState){
			case 0: 
				setScreen(<StartGameScreen onStart={onStartHandler} />)
				break;
			case 1:
				setScreen(<GameScreen userNumber={number} onGameFinishHandler={onGameFinish}/>)
				break;
			case 2:
				setScreen(<GameOverScreen number={number} guesses={guesses} onGameStartHandler={onGameStart}/>)
				break;
		}
	}, [gameState])

	return (
		<View style={styles.screen}>
			<Header text="Guess a Number" />
			{screen}
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: Colors.white,
	},
});
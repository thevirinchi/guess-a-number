import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, RecyclerViewBackedScrollView, Button, Alert } from 'react-native'

import Color from "../constants/Colors"

import HeadingPrimary from "../components/Typo/Heading/HeadingPrimary"
import Body from "../components/Typo/Body/Body"

const GameScreen = props => {

	const generateRandomNum = (min, max, exclude) => {
		min = Math.ceil(min)
		max = Math.floor(max)
		const randomNumber = Math.floor(Math.random() * (max - min) + min)
		if (randomNumber === props.userNumber)
			setGameState(true)
		return (randomNumber === exclude) ? generateRandomNum(min, max, exclude) : randomNumber
	}

	const [minGuess, setMinGuess] = useState(0)
	const [maxGuess, setMaxGuess] = useState(100)
	const [gameState, setGameState] = useState(false)
	const [guess, setGuess] = useState(generateRandomNum(minGuess, maxGuess, props.userNumber))

	useEffect(() => {
		setGuess(generateRandomNum(minGuess, maxGuess, guess))
	}, [minGuess, maxGuess])

	const lesserHandler = () => {
		if (guess < props.userNumber)
			Alert.alert("Don\'t Lie!", "You know that\'s wrong...", [{ text: "Sorry", style: "cancel" }])
		else
			setMaxGuess(guess)
	}

	const greatedHandler = () => {
		if (guess > props.userNumber)
			Alert.alert("Don\'t Lie!", "You know that\'s wrong...", [{ text: "Sorry", style: "cancel" }])
		else
			setMinGuess(guess)
	}

	return (
		<View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
			<View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", marginVertical: 16 }}>
				<Body text="Opponent's Guess" />
				<View style={{marginTop: 16,flexDirection: "column", justifyContent:"center", alignItems:"center",borderColor: Color.secondary, borderWidth: 2, borderRadius: 8, padding: 16}}><HeadingPrimary text={guess}/></View>
			</View>
			<View style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "space-evenly", marginVertical: 16 }}>
				<View style={{ width: "40%" }}><Button title="Lesser" onPress={lesserHandler} disabled={gameState} /></View>
				<View style={{ width: "40%" }}><Button title="Greated" onPress={greatedHandler} disabled={gameState} /></View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({

})

export default GameScreen;
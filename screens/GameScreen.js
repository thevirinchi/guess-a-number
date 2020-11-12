import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Button, Alert } from 'react-native'

import Color from "../constants/Colors"

import HeadingPrimary from "../components/Typo/Heading/HeadingPrimary"
import Body from "../components/Typo/Body/Body"

const GameScreen = props => {

	const generateRandomNum = (min, max, exclude) => {
		min = Math.ceil(min)
		max = Math.floor(max)
		const randomNumber = Math.floor(Math.random() * (max-min) + min)
		return (randomNumber === exclude)? generateRandomNum(min, max, exclude):randomNumber
	}

	const [guesses, setGuesses] = useState(0)
	const [minGuess, setMinGuess] = useState(0)
	const [maxGuess, setMaxGuess] = useState(100)
	const [gameState, setGameState] = useState(false)
	const [guess, setGuess] = useState(generateRandomNum(minGuess, maxGuess, props.userNumber))

	useEffect(()=>{
		if(parseInt(guess) === parseInt(props.userNumber)){
			setGameState(true)
			props.onGameFinishHandler(props.userNumber, guesses)
		}
	}, [guess])

	useEffect(()=>{
		setGuess(generateRandomNum(minGuess, maxGuess, guess))
		setGuesses((current)=>{return (current+1)})
	}, [minGuess, maxGuess])

	const lesserHandler = () => {
		if(guess<props.userNumber)
			Alert.alert("Don\'t Lie!", "You know that\'s wrong...", [{text: "Sorry", style: "cancel"}])
		else
			setMaxGuess(guess)
	}

	const greatedHandler = () => {
		if(guess>props.userNumber)
			Alert.alert("Don\'t Lie!", "You know that\'s wrong...", [{text: "Sorry", style: "cancel"}])
		else
			setMinGuess(guess)
	}

	return (
		<View style={styles.container}>
			<View style={styles.guessContainer}>
				<Body text="Opponent's Guess" />
				<View style={styles.guessBorder}><HeadingPrimary text={guess}/></View>
			</View>
			<View style={styles.buttonContainer}>
				<View style={{ width: "40%" }}><Button title="Lesser" onPress={lesserHandler} disabled={gameState} color={Color.indicativeWarning}/></View>
				<View style={{ width: "40%" }}><Button title="Greater" onPress={greatedHandler} disabled={gameState} color={Color.indicativeSuccess}/></View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: { flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" },
	guessContainer: { flexDirection: "column", alignItems: "center", justifyContent: "center", marginVertical: 16 },
	guessBorder: {marginTop: 16,flexDirection: "column", justifyContent:"center", alignItems:"center",borderColor: Color.secondary, borderWidth: 4, borderRadius: 8, padding: 16, shadowOpacity: 0.24,shadowRadius: 6,shadowOffset: {width: 0, height: 2},shadowColor: Color.black, elevation: 4, backgroundColor:Color.whiteLight},
	buttonContainer: { display: "flex", flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "space-evenly", marginVertical: 16 },

})

export default GameScreen;
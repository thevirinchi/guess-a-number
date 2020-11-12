import React, { useEffect, useState } from 'react'
import {View, Text, StyleSheet, RecyclerViewBackedScrollView, Button, Alert} from 'react-native'

import Body from "../components/Typo/Body"

const GameScreen = props => {

	const [minGuess, setMinGuess] = useState(0)
	const [maxGuess, setMaxGuess] = useState(100)
	const [guess, setGuess] = useState(generateRandomNum(minGuess, maxGuess, props.userNumber))

	useEffect(()=>{
		console.log(guess)
	}, [guess])

	useEffect(()=>{
		setGuess(generateRandomNum(minGuess, maxGuess, guess))
	}, [minGuess, maxGuess])

	const generateRandomNum = (min, max, exclude) => {
		min = Math.ceil(min)
		max = Math.floor(max)
		const randomNumber = Math.floor(Math.random() * (max-min) + min)
		return (randomNumber === exclude)? generateRandomNum(min, max, exclude):randomNumber
	}

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
		<View>
			<View>
				<Body text="Opponent's Guess"/>
				<Text>{guess}</Text>
			</View>
			<View>
				<View><Button title="Lesser" onPress={lesserHandler}/></View>
				<View><Button title="Greated" onPress={greatedHandler}/></View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({

})

export default GameScreen;
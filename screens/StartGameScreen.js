import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import HeadingPrimary from "../components/Typo/Heading/HeadingPrimary"
import Body from "../components/Typo/Body/Body"
import Card from "../components/Card/Card"
import SuccessButton from "../components/Button/SuccessButton"
import WarningButton from "../components/Button/WarningButton"

import Colors from "../constants/Colors"

const StartGameScreen = props => {

	const [number, setNumber] = useState()

	const numberChangeHandler = inputNumber => {
		setNumber(inputNumber.replace(/[^0-9]/g, ''))
	}

	const setNumberHandler = () => {
		if (isNaN(number) || number < 0 || number > 99)
			Alert.alert("Invalid number!", "Please enter a value in the range 0-99 only.", [{ text: "Okay", style: "destructive", onPress: setNumber() }])
		else
			props.onStart(number)
	}

	return (
		<TouchableWithoutFeedback onPress={() => { Keyboard.dismiss }}>
			<View style={styles.screen}>
				<HeadingPrimary text="Start a New Game!" />
				<Card>
					<Body text="Enter a number" />
					<TextInput placeholder="0-99" style={styles.numberInput} autoCorrect={false} keyboardType="number-pad" maxLength={2} onChangeText={numberChangeHandler} value={number} />
					<View style={styles.numberInput_buttonContainer}>
						<View style={styles.numberInput_button}><SuccessButton text="Set" hollow={false} onPressHandler={setNumberHandler}></SuccessButton></View>
						<View style={styles.numberInput_button}><WarningButton text="Cancel" hollow={false} onPressHandler={() => { setNumber() }}></WarningButton></View>
					</View>
				</Card>
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		paddingHorizontal: 24,
		paddingVertical: 16,
		alignItems: "center"
	},
	numberInput: {
		width: "80%",
		marginVertical: 16,
		borderColor: Colors.primaryDark,
		borderWidth: 1,
		minHeight: 40,
		textAlign: "center",
		borderRadius: 24
	},
	numberInput_buttonContainer: {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-evenly",
		alignItems: "center",
		paddingVertical: 8
	},
	numberInput_button: {
		width: "40%",
	}
})

export default StartGameScreen;
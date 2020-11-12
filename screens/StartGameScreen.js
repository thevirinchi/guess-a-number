import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

import HeadingPrimary from "../components/Typo/Heading/HeadingPrimary"
import Body from "../components/Typo/Body/Body"

const StartGameScreen = props => {
	return (
		<View style={styles.screen}>
			<HeadingPrimary text="Start a New Game!"/>
			<View style={styles.numberInput_container}>
				<Body text="Enter a number"/>
				<TextInput placeholder="1-100" style={styles.numberInput}/>
				<View style={styles.numberInput_buttonContainer}>
					<View style={styles.numberInput_button}><Button title="Set"></Button></View>
					<View style={styles.numberInput_button}><Button title="Cancel"></Button></View>
				</View>
			</View>
		</View>
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
		borderColor: "#ffa270",
		borderWidth: 1,
		minHeight: 40,
		textAlign: "center",
		borderRadius: 24
	},
	numberInput_container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		padding: 16,
		shadowOpacity: 0.24,
		shadowRadius: 6,
		shadowOffset: {width: 0, height: 2},
		shadowColor: "#212121",
		elevation: 8,
		backgroundColor: "#fff",
		borderRadius: 8,
		marginVertical: 16
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
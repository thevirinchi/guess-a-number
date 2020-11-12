import React from 'react'
import {View, Button, StyleSheet} from 'react-native'

import HeadingPrimary from "../components/Typo/Heading/HeadingPrimary"
import HeadingSecondary from "../components/Typo/Heading/HeadingSecondary"
import Body from "../components/Typo/Body/Body"

import ConfettiCannon from 'react-native-confetti-cannon';

import Colors from "../constants/Colors"

const GameOver = props => {
	return (
		<View style={styles.container}>
			<HeadingSecondary text="Game Over!"/>
			<HeadingPrimary text={"The number was " + props.number}/>
			<Body text={"Number of Guesses: " + props.guesses}/>
			<View style={{width: "50%", marginTop: 16}}><Button title="Restart" onPress={props.onGameStartHandler}/></View>
			<ConfettiCannon explosionSpeed={500} count={200} origin={{x: -10, y: 0}} fadeOut={true}/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {flex: 1, flexDirection: "column", justifyContent:"center", alignItems:"center"}
})

export default GameOver;
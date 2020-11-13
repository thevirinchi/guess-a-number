import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native'

const Body = props => {
	return (
		<View style={styles.container}>
			<Text style={styles.body}>{props.text}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 4,
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	body: {
		fontSize: 16,
		fontFamily: 'nunito-regular'
	}
})

export default Body;
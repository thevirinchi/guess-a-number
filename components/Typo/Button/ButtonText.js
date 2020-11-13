import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const HeadingPrimary = props => {
	return (
		<View style={styles.container}>
			<Text style={{...styles.heading, color: props.textColor}}>
				{props.text}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 8,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start"
	},
	heading: {
		fontSize: 16,
		fontFamily: 'nunito-bold',
		textTransform: "uppercase"
	}
})

export default HeadingPrimary;
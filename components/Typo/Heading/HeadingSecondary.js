import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const HeadingSecondary = props => {
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>
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
		fontSize: 18,
		fontWeight: "600"
	}
})

export default HeadingSecondary;
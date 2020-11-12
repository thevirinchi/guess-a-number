import React from 'react';
import {View, StyleSheet} from 'react-native';

import Colors from "../../constants/Colors"

const Card = props => {
	return (
		<View style={styles.container}>{props.children}</View>
	)
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		padding: 16,
		shadowOpacity: 0.24,
		shadowRadius: 6,
		shadowOffset: {width: 0, height: 2},
		shadowColor: Colors.black,
		elevation: 8,
		backgroundColor: Colors.whiteLight,
		borderRadius: 8,
		marginVertical: 16
	},
})

export default Card;
import React from 'react';
import {View, StyleSheet} from 'react-native';

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
		shadowColor: "#212121",
		elevation: 8,
		backgroundColor: "#fff",
		borderRadius: 8,
		marginVertical: 16
	},
})

export default Card;
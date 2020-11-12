import React from 'react'

import {View, Text, StyleSheet} from 'react-native'

const Header = props => {
	return (
		<View style={styles.header}>
			<Text style={styles.header_title}>{props.text}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		width: "100%",
		padding: 32,
		paddingTop: 40,
		height: 80,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		backgroundColor: "#ff7043"
	},
	header_title: {
		fontSize: 18,
		color: "#212121"
	}
})

export default Header;
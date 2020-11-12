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
		paddingBottom: 32,
		paddingTop: 48,
		paddingHorizontal: 24,
		height: 80,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		backgroundColor: "#ff7043",
		shadowOpacity: 0.25,
		shadowRadius: 6,
		shadowOffset: {width: 0, height: 2},
		shadowColor: "#212121",
		elevation: 8
	},
	header_title: {
		fontSize: 18,
		color: "#212121",
		fontWeight: "600"
	}
})

export default Header;
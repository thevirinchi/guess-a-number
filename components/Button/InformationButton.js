import React from 'react'
import { View, StyleSheet, TouchableOpacity, TouchableHighlight, TouchableHighlightComponent } from 'react-native';

import Colors from "../../constants/Colors"

import ButtonText from "../Typo/Button/ButtonText"

const InformationButtom = props => {
	return (
		<TouchableOpacity onPress={props.onPressHandler}>
			<View style={props.hollow ? styles.button__hollow : styles.button__fill}>
				<ButtonText text={props.text} textColor={props.hollow ? Colors.indicativeInformation : Colors.white} />
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button__hollow: { flexDirection: "row", justifyContent: "center", alignItems: "center", borderColor: Colors.indicativeInformation, borderWidth: 2, borderRadius: 8, elevation: 4, backgroundColor: Colors.whiteLight },
	button__fill: { flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: Colors.indicativeInformation, borderRadius: 8, elevation: 4 }
})

export default InformationButtom;
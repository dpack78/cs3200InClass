import React, { Component } from 'react';
import {
		Platform,
		StyleSheet,
		Text,
		View,
		ImageBackground
} from 'react-native';
import Styles from '../styles/Styles'
import UtilityFunctions from './UtilityFunctions'
import ApiService from './ApiService'

export default class Births extends Component {
	render() {
		return (
			<View>
				<ImageBackground source={"https://images.pexels.com/photos/5309/dawn-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}>
					<Text style={Styles.headerText}>
						Famous Births on {UtilityFunctions.getCurrentDate()}
					</Text>
				</ImageBackground>
			</View>
		);
	}
}
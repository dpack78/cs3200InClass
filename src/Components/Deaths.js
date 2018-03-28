import React, { Component } from 'react';
import {
		Platform,
		StyleSheet,
		Text,
		View
} from 'react-native';
import Styles from '../styles/Styles'
import UtilityFunctions from './UtilityFunctions'
import ApiService from './ApiService'

export default class Deaths extends Component {
		render() {
			return (
                <View>
					<ImageBackground source={"https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}>
						<Text style={Styles.headerText}>
							Famous Deaths on {UtilityFunctions.getCurrentDate()}
						</Text>
					</ImageBackground>
                </View>
			);
		}
}

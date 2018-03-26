import React, { Component } from 'react';
import {
		Platform,
		StyleSheet,
		Text,
		View
} from 'react-native';
import Styles from '../Styles/Styles'
import UtilityFunctions from './UtilityFunctions'
import ApiService from './ApiService'

export default class Deaths extends Component {
		render() {
			return (
                <View>
                    <Text style={Styles.headerText}>
                        Famous Deaths on {UtilityFunctions.getCurrentDate()}
                    </Text>
                </View>
			);
		}
}
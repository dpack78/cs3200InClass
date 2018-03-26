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

export default class Births extends Component {
		render() {
			return (
                <View>
                    <Text style={Styles.headerText}>
                        Famous Births on {UtilityFunctions.getCurrentDate()}
                    </Text>
                </View>
			);
		}
}
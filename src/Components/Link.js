import React, { Component } from 'react';
import {
		Platform,
		StyleSheet,
		Text,
		View
} from 'react-native';
import Styles from '../Styles/Styles'

export default class link extends Component {
		render() {
			return (
                <View>
                    <Text style={Styles.Link}
                        onPress={() => Linking.openURL(this.props.link)}>
                        {this.props.content}
                    </Text>
                </View>
			);
		}
}
import React, { Component } from 'react';
import {
		Platform,
		StyleSheet,
		Text,
		View
} from 'react-native';
import { 
		NavigationActions,
		StackNavigator, 
		TabNavigator
} from 'react-navigation';

import EventsScreen from './src/Components/EventsScreen';
import BirthsScreen from './src/Components/BirthsScreen';
import DeathsScreen from './src/Components/DeathsScreen';

const RootTab = TabNavigator({
	TabOne: {
		screen: EventsScreen,
		navigationOptions: {
			title: 'EventsScreen'
		}
	},
	TabTwo: {
		screen: BirthsScreen,
		navigationOptions: {
			title: 'BirthsScreen'
		}
	},
	TabThree: {
		screen: DeathsScreen,
		navigationOptions: {
				title: 'DeathsScreen'
		}
	}
},
{
	tabBarPosition: 'bottom'
});

//The base component for the tab menu
export default class App extends Component {
	render() {
		return (
			<RootTab />
		);
	}
}
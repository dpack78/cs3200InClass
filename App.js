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

import Events from './Components/Events';
import Births from './Components/Births';
import Deaths from './Components/Deaths';

const RootTab = TabNavigator({
	TabOne: {
			screen: Events,
			navigationOptions: {
					title: 'Events'
			}
	},
	TabTwo: {
			screen: Search,
			navigationOptions: {
					title: 'Births'
			}
  },
  TabThree: {
			screen: Search,
			navigationOptions: {
					title: 'Deaths'
			}
	}
});

//The base component for the tab menu
export default class App extends Component {
		render() {
			return (
				<RootTab />
			);
		}
}
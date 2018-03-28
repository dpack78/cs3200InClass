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
					{this.state.data != null ? this._renderDeaths() : <Text>Loading...</Text>}
                </View>
			);
		}

	//Populate this.state.data with api call
	_getBirths() {
		ApiService.getTodaysDeaths()
		.then(results =>{
			this.setState({data: results});
		  })
		  .catch((error) => {
			console.error(error);
			reject(error);
		})
	}

	//Put data from api into a FlatList to be rendered
	_renderBirths() {
		return (<FlatList
			data = {this.state.data}
			//keyExtractor = {(item, index) => item.something} //TODO: Change item.something
			renderItem={this._renderItem}
	/>);
	}

	// Set how each item inside this.state.data is displayed. Used as the FlatList's renderItem method.
    _renderItem = ({item}) => {
        return (
        <View style={Styles.listElementView}>
			<Text>{item.year} or whatever the api returns</Text>
			<Text>{item.name}</Text>
        </View>
        );
      }
}